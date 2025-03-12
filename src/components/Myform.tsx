//Пример базового использования react-hook-form в компоненте формы

import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
    firstName: string;
}

export function MyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName', { required: true })} placeholder="Имя" />
            {errors.firstName && <span>Это поле обязательно</span>}

            <input type="submit" />
        </form>
    );
}
