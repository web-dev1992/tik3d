import Image from 'next/image';


const Clients=()=>{
    return (
        <div className="w-9/12 h-max m-auto flex flex-col md:flex-row flex-nowrap justify-center items-center gap-2 md:gap-0 my-20">
            <Image src="/images/clients 2.png" alt="clients" width={626} height={108}/>
            <Image src="/images/clients 3.png" alt="clients" width={626} height={108}/>

        </div>
    )
}

export default Clients;