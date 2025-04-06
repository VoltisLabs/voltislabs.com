"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { TbFidgetSpinner } from "react-icons/tb"

export default function FidgetSpinner({ imageUrl }: { imageUrl?: string }) {
    const [rotation, setRotation] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)
    const lastPositionRef = useRef({ x: 0, y: 0 })
    const centerRef = useRef({ x: 0, y: 0 })
    const isDraggingRef = useRef(false)
    const velocityRef = useRef(0)
    const lastTimeRef = useRef(0)
    const animationRef = useRef<number | null>(null)

    // Function to handle momentum-based animation
    const animateMomentum = () => {
        if (!isAnimating) return

        // Apply friction to gradually slow down
        velocityRef.current *= 0.95

        // Update rotation based on velocity
        setRotation((prev) => prev + velocityRef.current)

        // Stop animation when velocity becomes very small
        if (Math.abs(velocityRef.current) < 0.1) {
            setIsAnimating(false)
            return
        }

        // Continue animation
        animationRef.current = requestAnimationFrame(animateMomentum)
    }

    // Start/stop animation when isAnimating changes
    useEffect(() => {
        if (isAnimating) {
            animationRef.current = requestAnimationFrame(animateMomentum)
        } else if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isAnimating])

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!elementRef.current) return

        // Stop any ongoing momentum animation
        setIsAnimating(false)
        velocityRef.current = 0

        isDraggingRef.current = true
        lastTimeRef.current = performance.now()

        // Calculate the center of the element
        const rect = elementRef.current.getBoundingClientRect()
        centerRef.current = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        }

        // Save the starting point
        lastPositionRef.current = {
            x: e.clientX,
            y: e.clientY,
        }

        // Prevent default to avoid any browser drag behavior
        e.preventDefault()
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current) return

        const currentTime = performance.now()
        const deltaTime = currentTime - lastTimeRef.current
        lastTimeRef.current = currentTime

        const center = centerRef.current
        const currentPosition = { x: e.clientX, y: e.clientY }
        const lastPosition = lastPositionRef.current

        // Calculate vectors from center to positions
        const lastVector = {
            x: lastPosition.x - center.x,
            y: lastPosition.y - center.y,
        }

        const currentVector = {
            x: currentPosition.x - center.x,
            y: currentPosition.y - center.y,
        }

        // Calculate the cross product to determine rotation direction
        const crossProduct = lastVector.x * currentVector.y - lastVector.y * currentVector.x

        // Calculate the dot product to find the angle
        const dotProduct = lastVector.x * currentVector.x + lastVector.y * currentVector.y

        // Calculate magnitudes of vectors
        const lastMagnitude = Math.sqrt(lastVector.x * lastVector.x + lastVector.y * lastVector.y)
        const currentMagnitude = Math.sqrt(currentVector.x * currentVector.x + currentVector.y * currentVector.y)

        // Calculate the angle between vectors (in radians)
        const cosAngle = dotProduct / (lastMagnitude * currentMagnitude)
        // Clamp cosAngle to [-1, 1] to avoid Math.acos errors due to floating point precision
        const clampedCosAngle = Math.max(-1, Math.min(1, cosAngle))
        const angle = Math.acos(clampedCosAngle) * (180 / Math.PI)

        // Determine direction based on cross product
        const rotationChange = (crossProduct >= 0 ? angle : -angle) * 1.6

        // Update rotation
        setRotation((prev) => prev + rotationChange)

        // Calculate velocity (degrees per millisecond)
        if (deltaTime > 0) {
            // Calculate instantaneous velocity
            const instantVelocity = rotationChange / deltaTime

            // Smooth velocity with previous value (weighted average)
            velocityRef.current = velocityRef.current * 0.8 + instantVelocity * 0.2 * 16 // Scale for animation frame rate
        }

        // Update last position for next move
        lastPositionRef.current = currentPosition

        // Prevent default to avoid any browser drag behavior
        e.preventDefault()
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        if (isDraggingRef.current) {
            isDraggingRef.current = false

            // Start momentum animation if velocity is significant
            if (Math.abs(velocityRef.current) > 0.1) {
                setIsAnimating(true)
            }

            // Prevent default to avoid any browser drag behavior
            e.preventDefault()
        }
    }

    // Touch event handlers (similar logic to mouse events)
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!elementRef.current || e.touches.length !== 1) return

        // Stop any ongoing momentum animation
        setIsAnimating(false)
        velocityRef.current = 0

        isDraggingRef.current = true
        lastTimeRef.current = performance.now()

        const touch = e.touches[0]
        const rect = elementRef.current.getBoundingClientRect()
        centerRef.current = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        }

        lastPositionRef.current = {
            x: touch.clientX,
            y: touch.clientY,
        }

        // Prevent default to avoid any browser drag/scroll behavior
        e.preventDefault()
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDraggingRef.current || e.touches.length !== 1) return

        const currentTime = performance.now()
        const deltaTime = currentTime - lastTimeRef.current
        lastTimeRef.current = currentTime

        const touch = e.touches[0]
        const center = centerRef.current
        const currentPosition = { x: touch.clientX, y: touch.clientY }
        const lastPosition = lastPositionRef.current

        // Calculate vectors from center to positions
        const lastVector = {
            x: lastPosition.x - center.x,
            y: lastPosition.y - center.y,
        }

        const currentVector = {
            x: currentPosition.x - center.x,
            y: currentPosition.y - center.y,
        }

        // Calculate the cross product to determine rotation direction
        const crossProduct = lastVector.x * currentVector.y - lastVector.y * currentVector.x

        // Calculate the dot product to find the angle
        const dotProduct = lastVector.x * currentVector.x + lastVector.y * currentVector.y

        // Calculate magnitudes of vectors
        const lastMagnitude = Math.sqrt(lastVector.x * lastVector.x + lastVector.y * lastVector.y)
        const currentMagnitude = Math.sqrt(currentVector.x * currentVector.x + currentVector.y * currentVector.y)

        // Calculate the angle between vectors (in radians)
        const cosAngle = dotProduct / (lastMagnitude * currentMagnitude)
        // Clamp cosAngle to [-1, 1] to avoid Math.acos errors due to floating point precision
        const clampedCosAngle = Math.max(-1, Math.min(1, cosAngle))
        const angle = Math.acos(clampedCosAngle) * (180 / Math.PI)

        // Determine direction based on cross product
        const rotationChange = crossProduct >= 0 ? angle : -angle

        // Update rotation
        setRotation((prev) => prev + rotationChange)

        // Calculate velocity (degrees per millisecond)
        if (deltaTime > 0) {
            // Calculate instantaneous velocity
            const instantVelocity = rotationChange / deltaTime

            // Smooth velocity with previous value (weighted average)
            velocityRef.current = velocityRef.current * 0.8 + instantVelocity * 0.2 * 16 // Scale for animation frame rate
        }

        // Update last position for next move
        lastPositionRef.current = currentPosition

        // Prevent default to avoid any browser drag/scroll behavior
        e.preventDefault()
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (isDraggingRef.current) {
            isDraggingRef.current = false

            // Start momentum animation if velocity is significant
            if (Math.abs(velocityRef.current) > 0.1) {
                setIsAnimating(true)
            }

            // Prevent default to avoid any browser drag/scroll behavior
            e.preventDefault()
        }
    }

    return (
        <motion.div
            ref={elementRef}
            className="spinner"
            style={{
                rotate: `${rotation}deg`,
                cursor: isDraggingRef.current ? "grabbing" : "grab",
            }}
            // animate={{ rotate: rotation }}
            // transition={{
            //     type: "spring",
            //     stiffness: 200,
            //     damping: 20,
            //     duration: isAnimating ? 0 : undefined,
            // }}

            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* <Image
                src={imageUrl || "/placeholder.svg"}
                alt="Fidget Spinner"
                width={500}
                height={500}
                className="spinner-image object-contain"
                priority
            /> */}
            <TbFidgetSpinner className="size-72 self-center lg:size-96" />
        </motion.div>
    )
}

