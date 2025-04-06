import { Button, InputField, Option, SelectField } from '@admiral-ds/react-ui';
import {
    ModalContentCustom,
    ModalСontainerInputs,
    ModalTitleStyleCustom,
    ModalButtonPanelCustom,
} from '../styled/ModalFilter.styled';
import { useModalFilter } from '../hooks/useModalFilter';
import { Controller } from 'react-hook-form';

interface ModalFilterProps {
    onClose: () => void;
}

export const ModalFilter = ({ onClose }:ModalFilterProps) => {
    const { control, handleSubmit, onSubmit, handleReset, statusOptions } =
        useModalFilter();

    return (
        <ModalContentCustom
            onClose={onClose}
            closeOnOutsideClick={true}>
            <ModalTitleStyleCustom>Фильтр</ModalTitleStyleCustom>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalСontainerInputs>
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
                                value={field.value ?? ''}
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
                                value={field.value ?? ''}
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
                                value={field.value ?? ''}
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
                                value={field.value ?? ''}
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
                                value={field.value ?? ''}
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
                </ModalСontainerInputs>
                <ModalButtonPanelCustom>
                    <Button type="submit" dimension="s" appearance="primary">
                        Применить
                    </Button>
                    <Button dimension="s" appearance="secondary" onClick={onClose}>
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