import React from 'react';
import { useForm } from 'react-hook-form';
import { User } from 'utils/types';
import { InputWrapper, Notification } from '../../components';
import styles from './Form.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { addNewUser } from '../../store';

type FormInputs = {
  nickname: string;
  dateOfBirth: string;
  country: string;
  img: string;
  sex: string;
  isAgree: boolean;
};

const Form: React.FC = () => {
  const [image, setImage] = React.useState<string>('');
  const [isNotificationShown, setNotificationShown] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormInputs) => {
    const user: User = { id: crypto.randomUUID(), image: image, ...data };
    console.log(data);
    dispatch(addNewUser(user));
    reset();
    setNotificationShown(true);
    setTimeout(() => setNotificationShown(false), 1300);
  };

  const handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageFile = event.target.files && event.target.files[0];
        if (imageFile !== null) {
          setImage(URL.createObjectURL(imageFile));
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <>
      <form className={styles.form} data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper name="nickname" title="Nickname" error={errors.nickname?.message}>
          <input
            {...register('nickname', {
              required: 'Value should not be empty',
              minLength: {
                value: 3,
                message: 'Min 3 symbols',
              },
            })}
            type="text"
            id="nickname"
          />
        </InputWrapper>

        <InputWrapper name="date" title="Date of birth" error={errors.dateOfBirth?.message}>
          <input
            {...register('dateOfBirth', { required: 'Value should not be empty' })}
            type="datetime-local"
            id="date"
          />
        </InputWrapper>

        <InputWrapper name="country" title="Country" error={errors.country?.message}>
          <select
            {...register('country', { required: 'Value should not be empty' })}
            id="country"
            defaultValue={''}
          >
            <option disabled hidden value=""></option>
            <option value="Canada">Canada</option>
            <option value="Poland">Poland</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
          </select>
        </InputWrapper>

        <InputWrapper name="img" title="Image" error={errors.img?.message}>
          <input
            {...register('img', { required: 'Value should not be empty' })}
            type="file"
            id="img"
            accept=".jpg, .png, .jpeg"
            onInput={handleImageInput}
          />
        </InputWrapper>

        <div className={styles.radio__wrapper}>
          <p>Sex:</p>
          <div>
            <InputWrapper type="radio" name="male" title="Male">
              <input
                {...register('sex', { required: 'Value should not be empty' })}
                type="radio"
                name="sex"
                value="male"
                id="male"
              />
            </InputWrapper>

            <InputWrapper type="radio" name="female" title="Female">
              <input {...register('sex')} type="radio" name="sex" value="female" id="female" />
            </InputWrapper>

            <InputWrapper type="radio" name="other" title="Other">
              <input {...register('sex')} type="radio" name="sex" value="other" id="other" />
            </InputWrapper>
          </div>
          {errors.sex && <p className={styles.error}>{errors.sex?.message}</p>}
        </div>

        <InputWrapper
          type="checkbox"
          name="agreement"
          title="I've read user agreement"
          error={errors.isAgree?.message}
        >
          <input
            {...register('isAgree', { required: 'Value should not be empty' })}
            type="checkbox"
            id="agreement"
          />
        </InputWrapper>

        <button className={styles.submit} type="submit">
          Add new user
        </button>
      </form>
      {isNotificationShown && <Notification type={'success'} text="User was added" />}
    </>
  );
};

export default Form;
