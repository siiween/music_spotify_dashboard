import Text from "../../Text";

export default function TopPlayListsSkeleton({ number }: { number: number }) {
    return (<section className="flex flex-col gap-5 animate-pulse">
        <Text as="h1" size="3xl" variant="primary" className="font-bold">
            Top Playlists
        </Text>
        <div className="flex flex-col gap-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 md:gap-3">

                {Array.from({ length: number }, (_, index) => (

                    <div key={index} className="w-full aspect-square rounded-lg p-3">
                        <div key={index} className="w-full aspect-square bg-gray-200 dark:bg-neutral-800 rounded-lg" />
                        <div className="w-full mt-2">
                            <Text
                                as="h3"
                                size="xl"
                                variant="muted"
                                className="truncate font-semibold text-left"
                            >
                                Loading
                            </Text>
                        </div>

                    </div>
                ))}

            </div>
        </div>

    </section>)
}