import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { cartService } from './services/api.service';
import { IProductQty } from './types';
import { cartModule } from './store';
export const initCartForm = () => {
    const formValues = {
        country: ' ',

        state: ' ',

        zipCode: ' ',

        shippingMethod: 21,

        couponCode: ' ',
    };

    const { handleSubmit, isSubmitting } = useForm({
        initialValues: formValues,
    });

    const onSubmit = handleSubmit((values) => {
        const prodQty: IProductQty[] = cartModule.productList.map((product) => {
            return {
                id: product.id,
                qty: product.qty,
            };
        });

        cartService.processCheckout({
            ...values,
            products: prodQty,
        });
    });

    const { value: country, errorMessage: countryError } = useField(
        'country',
        yup.string().required(),
    );

    const { value: state, errorMessage: stateError } = useField(
        'state',
        yup.string().required(),
    );
    const { value: zipCode, errorMessage: zipCodeError } = useField(
        'zipCode',
        yup.string().required(),
    );
    const { value: shippingMethod, errorMessage: shippingMethodError } = useField(
        'shippingMethod',
        yup.number().required(),
    );
    const { value: couponCode, errorMessage: couponCodeError } = useField(
        'couponCode',
        yup.string().required(),
    );

    return {
        onSubmit,
        isSubmitting,
        country,
        countryError,
        state,
        stateError,
        zipCode,
        zipCodeError,
        shippingMethod,
        shippingMethodError,
        couponCode,
        couponCodeError,
    };
};
