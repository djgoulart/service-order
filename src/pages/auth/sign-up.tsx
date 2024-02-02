import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  companyName: z.string(),
  managerName: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Sucesso!', {
        description: 'Enviamos um link de acesso para o seu e-mail.',
      })

      navigate('/sign-in')
    } catch (error) {
      toast.error('Erro ao cadastrar')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-4 md:p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cadastre-se
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie e acompanhe ordens de serviço, gratuitamente
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da empresa</Label>
              <Input
                id="companyName"
                type="text"
                {...register('companyName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Finalizar cadastro
            </Button>
          </form>

          <p>
            <span className="text-sm text-muted-foreground">
              Já possui uma conta?
            </span>{' '}
            <Link to="/sign-in">
              <span className="">Faça login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
