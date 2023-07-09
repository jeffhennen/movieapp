export default function Footer(){

    function ShowYear(){
        const newYear= new Date().getFullYear();
        console.log(newYear);
        if(newYear > 2023){
                return ("-"+ newYear);
        }
    }

    return(

        <div className="pb-3"><p className="text-center pt-5 text-white">created by Jeffrey Hennen ©️2023<ShowYear /></p></div>        
    );
}