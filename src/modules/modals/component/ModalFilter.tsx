import { closeModalFilter } from '../slice/modalFilterSlice';
import { Button, InputField, Option, SelectField } from '@admiral-ds/react-ui';
import {
    ModalContentCustom,
    ModalСontainerInputs,
    ModalTitleStyleCustom,
    ModalButtonPanelCustom,
} from '../styled/ModalFilter.styled';
import ReactDOM from 'react-dom';
import { useModalFilter } from '../hooks/useModalFilter';

export const ModalFilter = () => {
    const { isOpen, register, handleSubmit, onSubmit, handleReset, statusOptions, dispatch, modalData } =
        useModalFilter();

    if (!isOpen) return null;
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    // Сделаю валидацию в форме фильтра

    return ReactDOM.createPortal(
        <ModalContentCustom
            onClick={(e) => e.stopPropagation()}
            onClose={() => dispatch(closeModalFilter())}
            closeOnOutsideClick={true}>
            <ModalTitleStyleCustom>Фильтр</ModalTitleStyleCustom>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalСontainerInputs>
                    <InputField
                        label="Субсчёт клиента"
                        dimension="s"
                        type="number"
                        {...register('customerId')}
                        defaultValue={modalData?.customerId || ''}
                    />
                    <InputField
                        label="Номер договора"
                        dimension="s"
                        type="number"
                        {...register('contractNumber')}
                        defaultValue={modalData?.contractNumber || ''}
                    />
                    <InputField
                        label="Актив"
                        type="string"
                        {...register('asset')}
                        defaultValue={modalData?.asset || ''}
                        dimension="s"
                    />
                    <InputField
                        label="Начальная дата перевода ЦБ"
                        required
                        type="date"
                        dimension="s"
                        {...register('startDate')}
                        defaultValue={modalData?.startDate || ''}
                    />
                    <InputField
                        label="Конечная дата перевода ЦБ"
                        required
                        dimension="s"
                        type="date"
                        {...register('endDate')}
                        defaultValue={modalData?.endDate || ''}
                    />
                    <SelectField
                        label="Статус"
                        {...register('status')}
                        defaultValue={modalData?.status || 'Выберите статус'}
                        dimension="s">
                        {statusOptions.map(({ id, value }) => (
                            <Option key={id} value={value}>
                                {value}
                            </Option>
                        ))}
                    </SelectField>
                </ModalСontainerInputs>
                <ModalButtonPanelCustom>
                    <Button type="submit" dimension="s" appearance="primary">
                        Применить
                    </Button>
                    <Button dimension="s" appearance="secondary" onClick={() => dispatch(closeModalFilter())}>
                        Отмена
                    </Button>
                    <Button dimension="s" appearance="secondary" onClick={handleReset}>
                        Сбросить
                    </Button>
                </ModalButtonPanelCustom>
            </form>
        </ModalContentCustom>,
        modalRoot,
    );
};