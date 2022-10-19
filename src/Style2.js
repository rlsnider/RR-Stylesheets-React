const styledText = {
    fontSize: "50px",
    color: "purple",
    backgroundColor: "pink",
    padding: "10px",
    border: "20px outset purple",
    margin: "50px 200px 50px 200px",
    textAlign: "center"  
};

export default function Style2(){
    return (
        <div style={styledText}>
            <p>Purple Box</p>
        </div>
    )
}