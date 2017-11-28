import React from 'react';
import { Form, Text } from 'react-form';

class PlayerForm2 extends React.Component {
    errorValidator = (values) => ({

    });

    successValidator = (values, errors) => ({

    });

    submitForm = (e, formApi) => {
        e.preventDefault();
        console.log('Submitting form');
        formApi.submitForm();
        console.log('Called formApi.submitForm');
    };

    render() {
        return (
            <div>
                <Form
                    validateError={errorValidator}
                    validateSuccess={successValidator}
                    asyncValidators={asyncValidators}>

                {
                    (formApi) =>
                        <form onSubmit={(e) => this.submitForm(e, formApi)}>
                            <input type="submit" value="submit" />
                        </form>
                }

                </Form>
            </div>
        );
    }
}

export default PlayerForm2;