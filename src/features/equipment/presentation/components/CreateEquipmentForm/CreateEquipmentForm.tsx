import { AreaFormField } from '@/core/components/ui/AreaFormField';
import { ImagePreviewInput } from '@/core/components/ui/ImagePreviewInput';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { CreateEquipmentDto } from '@/features/equipment/application/dto/create-equipment.dto';
import { Formik } from 'formik';
import React from 'react';

export type CreateEquipmentFormProps = {}

const CreateEquipmentForm: React.FC<CreateEquipmentFormProps> = () => {
    return (
        <Formik
            initialValues={new CreateEquipmentDto()}
            validationSchema={{}}
            onSubmit={() => { }}
        >
            {({
                values,
                errors,
                handleChange,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="px-8 pt-6 mb-1 flex flex-col my-2">
                        <div className="text-white mb-5"><p className="text-lg font-semibold">Información del equipo</p></div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="w-1/3 px-3 mb-6 md:mb-0">
                                <ImagePreviewInput
                                    updateFilesCb={() => {}}
                                    isDark={true}

                                />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <TextFormField
                                    label='Nombre'
                                    name='name'
                                    onChange={handleChange}
                                    value={values.name}
                                    error={errors.name}
                                />
                            </div>
                            <div className="md:w-1/3 px-3">
                                <TextFormField
                                    label='Cantidad'
                                    name="qty"
                                    onChange={handleChange}
                                    value={values.qty}
                                    error={errors.qty}
                                />
                            </div>
                            <div className="md:w-1/3 px-3">
                                <AreaFormField
                                    label='Descripción'
                                    name="description"
                                    onChange={handleChange}
                                    value={values.description}
                                    error={errors.description}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default CreateEquipmentForm;