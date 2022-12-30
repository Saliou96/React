import React from 'react'
// import Carte from './Carte'
// import Header from './Header'
// import Footer from '../layout/Footer';
import {Label,TextInput,Checkbox,Button} from 'flowbite-react'


function Register() {

  return (
    <div className='mt-5 d-flex '>
      <Button><a href="/">Home</a></Button>

    {/* <Header sant='Saliou' att={21} niv='MGLSI'/> */}
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
          shadow={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Your password"
          />
        </div>
        <TextInput
          id="password2"
          type="password"
          required={true}
          shadow={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree">
          I agree with the{' '}
          <a
            href="/forms"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit">
        Register new account
      </Button>
    </form>
  </div>
  )
}

export default Register
