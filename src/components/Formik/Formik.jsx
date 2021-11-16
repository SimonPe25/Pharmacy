import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import MyInput1 from "./MyInput";
import Button from "../Button/Index";
import './style.scss'
import { getValues } from "../../store/selectors";
import { dataAge, dataDelivery, dataMobil, dataName, dataSurname } from "../../store/actions";


const validationFormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
        .min(2, 'Too Short Name!'),
    surname: Yup.string()
        .required('Required')
        .min(2, 'Too Short Surname!'),
    age: Yup.number()
        .required('Required')
        .min(18, 'You can pay after 18 age!'),
    delivery: Yup.string()
        .required('Required')
        .min(5, 'Too Short delivery!'),
    mobil: Yup.number()
        .required('Required')
        .min(8, 'Too Short mobil!'),

})

const Formik1 = (props) => {
    const { cards } = props
    const medicCart = cards.filter(el => el.added).map(el => el.title)

    const dispatch = useDispatch()
    const values = useSelector(getValues)

    const submitForm = (values) => {
        const { name, surname, age, delivery, mobil } = values
        dispatch(dataName(name))
        dispatch(dataSurname(surname))
        dispatch(dataAge(age))
        dispatch(dataDelivery(delivery))
        dispatch(dataMobil(mobil))
        localStorage.removeItem('added')
        console.log('ФОРМА ЗАКАЗА');
        console.log(`Имя пользователя:    ${name}`)
        console.log(`Фамилия пользователя:    ${surname}`)
        console.log(`Возраст пользователя:    ${age}`)
        console.log(`Адрес доставки:    ${delivery}`)
        console.log(`Мобильный телефон:    ${mobil}`)
        console.log("ЗАКАЗАННЫЕ ТОВАРЫ : ", { medicCart });
    };

    return (
        <div className="container-form">
            <h1>Форма заказа</h1>
            <Formik
                initialValues={values}
                onSubmit={submitForm}
                validationSchema={validationFormSchema}
            >
                {(formikProps) => {
                    return (
                        <div >
                            <Form>
                                <Field component={MyInput1} name="name" type="text" label="Имя пользователя" />
                                <Field component={MyInput1} name="surname" type="text" label="Фамилия пользовател" />
                                <Field component={MyInput1} name="age" type="number" label="Возраст" />
                                <Field component={MyInput1} name="delivery" type="text" label="Адрес доставки" />
                                <Field component={MyInput1} name="mobil" type="number" label="Мобильный телефон" />
                                <div>
                                    <Button type="submit" text="Send form" />
                                </div>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Formik1;