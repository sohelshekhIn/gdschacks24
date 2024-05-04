import Notes from "@/components/Notes";

const MyNotes = () => {

    const content = ["This is my data", "ihusfjod jdfgoihj odfjho", "hkdxfh bxkjfcv shdfkg", "gsiudfh sdofi wy7 uwe9oru", "netra hindocha", "sohel sheikh", "Akshat and Taranjeet"];

    return (
        <div>
            {content.map((note, index) => (
                <Notes key={index} content={note}/>
            ))}
        </div>
    )
}

export default MyNotes;