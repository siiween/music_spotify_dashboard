import Button from "../../Button";
import Text from "../../Text";


export default function TopArtistSkeleton({ number }: { number: number }) {
    return (<section className="flex flex-col gap-5 animate-pulse">
        <Text as="h1" size="3xl" variant="primary" className="font-bold">
            Followed Artists
        </Text>
        <div className="flex flex-col gap-5">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2">

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
            <div className="w-full flex flex-col items-center">
                <Button name="Loading"  size="md" className="w-fit" variant="outline">Loading</Button>
            </div>
        </div>

    </section>)
}