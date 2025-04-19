/*This page is to only demonstrate passing mood Values
from mood page to here*/

export default async function AI({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { mood = '1'} = await searchParams

    console.log(searchParams)

    return(
        <div>
           {mood}
        </div>
    )

}