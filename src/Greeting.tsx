type Props = {
    name:string;
    age?:number;
}

const Greeting: React.FC<Props>=({name,age})=>{
 return <h1>Hello,{name}!{age && `You are ${age} year old.`}</h1>
}

export default Greeting;