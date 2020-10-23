function Mendchilgee(){
return <h1>hello</h1>;
}
function Mendchilgee123(props){console.log(props)
return (
    <div>
        <h1> {props.ner} </h1>
        <p>{props.nas}</p>
        <p>{props.surchbaigaaeseh ? "unen": "choloo avsan"}</p>
        <p>{props.dunguud[0]}</p>
        <p>{props.dunguud[1]}</p>
        <p>{props.dunguud[2]}</p>

        {props.dunguud.map(
            (el, index ) =>
             <p key={index}>{el}</p>
)
        }
        <p>{props.myob.mergejil}</p>
        <p>{props.myob.index}</p>


    </div>
    );
}
ReactDOM.render(
    <Mendchilgee123 ner={"hello dorj"}
    nas={20}
    surchbaigaaeseh={true}
    dunguud={[80, "dalan ys", true]}
    myob={ {mergejil: 'sw', index:'sw17d037'} }/>,
    document.getElementById('root')
);