import { Button, InputField, Option, SelectField } from '@admiral-ds/react-ui';
import {
    ModalContentCustom,
    ModalContainerInputs,
    ModalTitleStyleCustom,
    ModalButtonPanelCustom,
} from './ModalFilter.styled';
import { useModalFilter } from '../../hooks/useModalFilter';
import { Controller } from 'react-hook-form';

export const ModalFilter = () => {
    const { onSubmit, handleReset, handleCloseModal, control, statusOptions } =
        useModalFilter();

    return (
        <ModalContentCustom onClose={handleCloseModal} closeOnOutsideClick={true}>
            <ModalTitleStyleCustom>Фильтр</ModalTitleStyleCustom>
            <form onSubmit={onSubmit}>
                <ModalContainerInputs>
                    <Controller
                        name="customerId"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                label="Субсчёт клиента"
                                placeholder="Введите субсчёт клиента"
                                dimension="s"
                                type="number"
                            />
                        )}
                    />
                    <Controller
                        name="contractNumber"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                label="Номер договора"
                                placeholder="Введите номер договора"
                                dimension="s"
                                type="number"
                            />
                        )}
                    />
                    <Controller
                        name="asset"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                label="Актив"
                                placeholder="Введите актив"
                                type="string"
                                dimension="s"
                            />
                        )}
                    />
                    <Controller
                        name="startDate"
                        control={control}
                        rules={{ required: 'Начальная дата перевода обязательная!' }}
                        render={({ field, fieldState }) => (
                            <InputField
                                {...field}
                                label="Начальная дата перевода ЦБ"
                                placeholder="Введите начальную дату перевода ЦБ"
                                required
                                status={fieldState.error ? 'error' : undefined}
                                type="date"
                                dimension="s"
                            />
                        )}
                    />
                    <Controller
                        name="endDate"
                        control={control}
                        rules={{ required: 'Конечная дата перевода обязательная!' }}
                        render={({ field, fieldState }) => (
                            <InputField
                                {...field}
                                label="Конечная дата перевода ЦБ"
                                placeholder="Введите конечную дату перевода ЦБ"
                                required
                                status={fieldState.error ? 'error' : undefined}
                                dimension="s"
                                type="date"
                            />
                        )}
                    />
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <SelectField label="Статус" placeholder="Выберите статус" dimension="s" {...field}>
                                {statusOptions.map(({ id, value }) => (
                                    <Option key={id} value={value}>
                                        {value}
                                    </Option>
                                ))}
                            </SelectField>
                        )}
                    />
                </ModalContainerInputs>
                <ModalButtonPanelCustom>
                    <Button type="submit" dimension="s" appearance="primary">
                        Применить
                    </Button>
                    <Button dimension="s" appearance="secondary" onClick={handleCloseModal}>
                        Отмена
                    </Button>
                    <Button dimension="s" appearance="secondary" onClick={handleReset}>
                        Сбросить
                    </Button>
                </ModalButtonPanelCustom>
            </form>
        </ModalContentCustom>
    );
};