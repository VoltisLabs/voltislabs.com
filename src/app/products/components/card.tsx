import ViewAllButton from "@/src/components/UI/view_all_button";


export default function Card({ title, description, image, link }: { title: string; description: string; image: string; link: string }) {

    return (
        <div className="group relative  md:pr-6 rounded-lg transition-all flex flex-col md:flex-row gap-7 items-center md:items-start ">
            <div className="max-w-[200px]">
                <img src={image} alt={title} className="w-full aspect-square  mb-2 rounded-md" />
                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white  text-center">
                    {title}
                </h3>
            </div>
            <div className="flex-col flex items-end gap-3 justify-between h-full ">
                <p className={`md:pt-4 text-gray-400 transition-colors duration-300 group-hover:text-white text-center text-pretty md:text-start`}>
                    {description}
                </p>
                <div className="ml-auto p-2 w-fit">
                    <ViewAllButton text="Read more" link={link} />
                </div>
            </div>
        </div>
    );
}
