import { useState } from 'react';
import Image from 'next/image'
import { Cards } from '@/components/Cards'
import MenuIcon from '/public/icons8-menú.svg'

export default function Home() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const handleClick = () => {
    setMostrarMenu(!mostrarMenu);
  };
  return (
    <main>
      <div className='items-center flex justify-between px-2 relative'>
        <Image
          src="/logo.png"
          alt="LOGO"
          width={85}
          height={85}
          className="p-2"
        />
        <div>
          <div className='sm:hidden'>
            <button onClick={handleClick} className='font-bold py-2 px-3 border-2 rounded text-l text-[#5A33AD]'>
              <Image src="/icons8-menú.svg" alt="Menu Icon" width={20} height={20} />
            </button>
            {mostrarMenu && (
              <div className='flex flex-col absolute left-0 right-0 top-full'>
                <button className=' p-1 text-l text-[#5A33AD]'>INICIO</button>
                <button className=' p-1 text-l text-[#5A33AD]'>NOSOTROS</button>
                <button className=' p-1 text-l text-[#5A33AD]'>SABORES</button>
                <button className=' p-1 text-l text-[#5A33AD]'>CONTACTOS</button>
                <button className='m-3 bg-[#FFE479] font-bold py-2 px-3 border-2 border-[#5A33AD] rounded text-l text-[#5A33AD]'>COMPRAR</button>
              </div>
            )}
          </div>
          <div className='sm:block hidden'>
            <button className=' p-3 text-l text-[#5A33AD]'>INICIO</button>
            <button className=' p-3 text-l text-[#5A33AD]'>NOSOTROS</button>
            <button className=' p-3 text-l text-[#5A33AD]'>SABORES</button>
            <button className=' p-3 text-l text-[#5A33AD]'>CONTACTOS</button>
            <button className='bg-[#FFE479] font-bold py-2 px-3 border-2 border-[#5A33AD] rounded text-l text-[#5A33AD]'>COMPRAR</button>
          </div>
        </div>
      </div>
      <div className={`absolute sm:top-auto ${mostrarMenu ? 'top-1/2' : ''}`}>        <div className="relative flex h-screen bg-no-repeat bg-cover bg-center justify-center">
          <div className=" absolute inset-0 z-[-1]" style={{ backgroundImage: `url('/dia-de-los-muertos-papel-picado-background-free-vector.jpg')` }}></div>
          <div className="absolute inset-0 bg-purple-600 opacity-50 z-[-1]"></div>
          <div className='sm:w-2/5 text-center place-self-center z-10'>
            <p className=' p-3 text-4xl font-medium text-white'>SALSAS CON SABOR A MÉXICO</p>
            <p className=' p-3 text-l text-white'>La Salsa mexicana para el mundo, especialidad artesanal para acompañar tus comidas favoritas. Ordena online aquí</p>
            <button className='bg-[#FFE479] font-bold py-4 px-3 rounded text-l '>NUESTROS SABORES</button>
          </div>
          <div className="self-center sm:block hidden">
            <Image
              src="/logo-hero.png"
              alt="LOGO"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className='sm:flex pt-10'>
          <div className='sm:w-1/2 m-auto pl-10 z-10'>
            <p className='font-bold text-3xl'>SOBRE NOSOTROS</p>
            <p className='font-bold text-xl text-[#5A33AD]'>ACERCA DE</p>
          </div>
          <div className='sm:w-1/2 p-10'>
            <p>El sabor es una parte importante de tu comida</p>
            <br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repudiandae quos alias harum ipsam vel. Ducimus, perspiciatis excepturi odit, obcaecati pariatur, ratione asperiores neque dicta numquam deleniti reprehenderit aliquid exercitationem.</p>
            <br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae praesentium, exercitationem a, repellendus soluta vel veritatis nostrum, non</p>
          </div>
        </div>
        <div className=' justify-center flex'>
          <Image
            src="/textures.png"
            alt="Texturas"
            width={700}
            height={250}
            layout="responsive"
            className='w-full h-auto'
          />
        </div>
        <div className="relative flex h-96 bg-no-repeat bg-cover bg-center justify-center">
          <div className="absolute inset-0 z-[-1]" style={{ backgroundImage: `url('/diversidad-cultural-en-mexico-social.jpg')` }}></div>
          <div className="absolute inset-0 bg-purple-600 opacity-50 z-[-1]"></div>
          <p className=' text-white font-bold text-3xl text-center flex place-self-center p-10'>LA CATRINA ES UNA MARCA DE SALSAS MEXICANA QUE ELABORA DELICIOS PRODUCTOS HECHOS A MANO.</p>
        </div>
        <div className='p-10'>
          <div className='m-auto pl-10'>
            <p className='font-bold text-3xl'>DESDE NUESTRA COCINA</p>
            <p className='font-bold text-xl text-[#5A33AD]'>MENÚ</p>
            <div className='flex flex-wrap'>
              <Cards nombre="CHILE SECO" />
              <Cards nombre="HABANERO" />
              <Cards nombre="CHILE DE ÁRBOL/PIÑA" />
              <Cards nombre="HABANERO/PIÑA" />
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='pt-10 bg-[#29184D]'>
          <div className='m-auto pl-10'>
            <p className='font-bold text-3xl text-white'>DESCUBRE EL NIVEL DE PICANTE</p>
            <p className='font-bold text-xl text-[#FFE479]'>CLASIFICACIÓN DE SABOR</p>
          </div>
          <div className='p-10 sm:flex sm:flex-row justify-center'>
            {/* Picosita */}
            <div className='m-5 sm:m-auto flex flex-col items-center'>
              <div className='m-auto flex flex-row justify-center space-x-2'> {/* Cambio aquí para horizontal */}
                <Image src="/flame-2.png" alt="Picosita" width={50} height={50} />
                <Image src="/flame-1.png" alt="Picosita" width={50} height={50} />
                <Image src="/flame-1.png" alt="Picosita" width={50} height={50} />
              </div>
              <p className='text-center font-medium text-xl text-white'>PICOSITA</p>
            </div>
            {/* Picante */}
            <div className='m-5 sm:m-auto flex flex-col items-center'>
              <div className='m-auto flex flex-row justify-center space-x-2'> {/* Cambio aquí para horizontal */}
                <Image src="/flame-2.png" alt="Picante" width={50} height={50} />
                <Image src="/flame-2.png" alt="Picante" width={50} height={50} />
                <Image src="/flame-1.png" alt="Picante" width={50} height={50} />
              </div>
              <p className='text-center font-medium text-xl text-white'>PICANTE</p>
            </div>
            {/* Muy Picante */}
            <div className='m-5 sm:m-auto flex flex-col items-center'>
              <div className='m-auto flex flex-row justify-center space-x-2'> {/* Cambio aquí para horizontal */}
                <Image src="/flame-2.png" alt="Muy Picante" width={50} height={50} />
                <Image src="/flame-2.png" alt="Muy Picante" width={50} height={50} />
                <Image src="/flame-2.png" alt="Muy Picante" width={50} height={50} />
              </div>
              <p className='text-center font-medium text-xl text-white'>MUY PICANTE</p>
            </div>
          </div>
          <div className=' justify-center flex'>
            <Image
              src="/textures.png"
              alt="Texturas"
              width={700}
              height={250}
              layout="responsive"
              className='w-full h-auto'
            />
          </div>
        </div>
        <div className='p-10 m-10 pl-10'>
          <p className='font-bold text-3xl'>TU SALSA A UN CLICK DE DISTANCIA</p>
          <p className='font-bold text-xl text-[#5A33AD]'>Cómo REALIZAR TU PEDIDO</p>
        </div>
        <div className='sm:flex'>
          <div className='pb-3 flex flex-col items-center text-center bg-[#29184D] px-5 pt-10'>
            <Image
              src="/icon-1.png"
              alt="LOGO"
              width={50}
              height={50}
              className='flex m-2'
            />
            <p className='font-bold text-3xl pb-2 text-[#FFE479]'>Elige tus Salsas</p>
            <p className='text-white'>Elija entre nuestros productos cualquer sabor de salsa que desees.</p>
          </div>
          <div className='pb-3 flex flex-col items-center text-center px-5 pt-10'>
            <Image
              src="/icon-2.png"
              alt="LOGO"
              width={50}
              height={50}
              className='flex m-2'
            />
            <p className='font-bold text-3xl pb-2'>Realizar tu pedido</p>
            <p className='text-[#5A33AD]'>Realiza tu pedido a través de Amazon o Mercadolibre.</p>
          </div>
          <div className='pb-3 flex flex-col items-center text-center bg-[#29184D] px-5 pt-10'>
            <Image
              src="/icon-3.png"
              alt="LOGO"
              width={50}
              height={50}
              className='flex m-2'
            />
            <p className='font-bold text-3xl pb-2 text-[#FFE479]'>Entregamos donde sea</p>
            <p className=' text-white'>¡Tu salsa está en camino! Llega justo a la puerta de tu hogar.</p>
          </div>
        </div>
        <div className='p-10 m-10 pl-10'>
          <p className='font-bold text-3xl'>¡PONTE EN CONTACTO!</p>
          <p className='font-bold text-xl text-[#5A33AD]'>LLÁMANOS O ESCRÍBENOS</p>
        </div>
        <div className='sm:flex pb-10'>
          <div className='m-2 sm:h-52 px-5 border-2 border-[#29184D] flex flex-col items-center text-center p-3 sm:m-auto'>
            <Image
              src="/clock-1.png"
              alt="LOGO"
              width={50}
              height={50}
              className='flex m-2'
            />
            <p className=' font-bold text-3xl'>Ordena ahora</p>
            <p className=' text-[#5A33AD] text-2xl'>Horario</p>
          </div>
          <div className='m-2 sm:h-52 px-3 flex flex-col items-center text-center border-2 border-[#29184D] p-3 sm:m-auto'>
            <Image
              src="/map-pin.png"
              alt="LOGO"
              width={50}
              height={50}
              className='flex m-2'
            />
            <p className=' font-bold text-3xl'>Veracruz, México</p>
            <p className=' text-[#5A33AD] text-2xl'>De donde somos</p>
          </div>
          <div className='m-2 sm:h-52 px-5 border-2 border-[#29184D] flex flex-col items-center text-center p-3 sm:m-auto'>
            <Image
              src="/phone-1.png"
              alt="LOGO"
              width={50}
              height={50}
              className='flex m-2'
            />
            <p className=' font-bold text-3xl'>+52 22 222 222</p>
            <p className=' text-[#5A33AD] text-2xl'>Duas o sugerencias</p>
          </div>
        </div>
        <div className=' bg-[#29184D] pt-10 pb-10 sm:flex  text-white'>
          <p className='m-auto'>Todos los derechos reservados</p>
          <p className='m-auto'>© La Catrina {new Date().getFullYear()}</p>
          <p className='m-auto'>Política de Privacidad</p>
        </div>
      </div>
    </main>
  )
}
