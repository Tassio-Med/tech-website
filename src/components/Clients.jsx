import React from 'react';
import {BsGoogle, BsMicrosoft} from 'react-icons/bs'
import {SiNasa, SiRedhat, SiNubank, SiTesla, SiXiaomi, SiFord} from 'react-icons/si'

function Clients(){
  return (
    <div name="trabalhos" className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Nossos Clientes</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <BsGoogle className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Google</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <BsMicrosoft className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Microsoft</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <SiFord className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Ford</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <SiNasa className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Nasa</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <SiNubank className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Nubank</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <SiRedhat className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Redhat</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <SiTesla className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Tesla</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <SiXiaomi className='w-7 mr-4 text-blue-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Xiaomi</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clients;