import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticação para o seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-4 md:p-8">
        <div className="flex w-[300px] flex-col justify-center gap-6 md:w-[350px]">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas ordens de serviço
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar painel
            </Button>
          </form>
          <p>
            <span className="text-sm text-muted-foreground">
              Ainda não tem uma conta?
            </span>{' '}
            <Link to="/sign-up">
              <span className="">Cadastre-se</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
