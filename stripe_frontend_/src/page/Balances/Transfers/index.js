import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { transfersListDispatch } from 'redux/actions'
import moment from 'moment';
import ArchLayout from 'components/layout/ArchLayout'
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import Pagination from 'components/general/Pagination'
import scss from 'assets/scss/productMainCreate.module.scss'
import { currencyFromat } from 'utils/format'
import ModalTransfers from 'components/general/Modal/Transfers'
import Filter from 'components/general/Select/Filter'
import Export from 'components/general/Modal/Export'
import { listColumn, defaultColumn } from './exportData'

export default () => {
    const dispatch = useDispatch()
    const { loading: { loadingGet }, transfers: { resTransfersList } } = useSelector(state => state)
    const [limit, setLimit] = useState(10);
    const [transferModal, setTransferModal] = useState(false)

    useEffect(() => {
        const apiBalance = async () => {
            await dispatch(transfersListDispatch({
                limit: limit,
            }))
        }
        apiBalance()

        return () => {
        }
    }, [transferModal === true])


    const filterClick = (value) => {
        dispatch(transfersListDispatch({
            limit: limit,
            ...value
        }))
    }

    const getDataDownload = async (dataParam) => {
        return transfersListDispatch(dataParam)
    }

    const columns = [
        {
            title: 'AMOUNT',
            dataIndex: 'id',
            key: 'id',
            render: (id) => {
                const { amount, currency, status } = resTransfersList?.data?.find(val => val.id === id)
                return amount ? <div style={{ display: "flex" }}> {currencyFromat({ number: amount, currency })}
                    {/* <Tag size="small" style={{ marginLeft: 3 }} color={status === "succeeded" ? "green" : "red"}>{status}</Tag> */}
                </div> : ""
            }
        },
        {
            title: 'DESCRIPTION',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'DATE',
            dataIndex: 'created',
            key: 'created',
            align: "right",
            render: (created) => moment(created).format("MMM D, YYYY")
        },
    ]

    const listFilter = [
        {
            title: "Create Date",
            value: "create_date",
            type: 'date',
            checked: false
        },
        {
            title: "Email",
            value: "email",
            type: 'input',
            checked: false
        }
    ]

    return (
        <ArchLayout>
            <div>
                <div className={scss.contentTop}>
                    <div className={scss.contentLeft}>
                        <div className={`${scss.titleXl}  ${scss.paddingBottom}`} >Transfers</div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Filter
                            doneClick={filterClick}
                            listMap={listFilter}
                        />
                        <Export
                            onGetApi={getDataDownload}
                            title={"Transfers"}
                            dataColumn={listColumn}
                            selectDataProps={defaultColumn}
                        />
                        <Button
                            size="small"
                            onClick={() => setTransferModal(true)}
                            icon={<PlusOutlined />}
                            style={{ marginLeft: 10 }}
                        >New</Button>
                    </div>
                </div>
                <div className={scss.contentMiddle}>
                    <Table
                        size="small"
                        dataSource={resTransfersList?.data}
                        columns={columns}
                        pagination={false}
                        loading={loadingGet}
                        footer={() => `${resTransfersList?.data?.length || 0} results`}
                    />
                    <Pagination
                        getDataApi={transfersListDispatch}
                        dataList={resTransfersList?.data}
                    />
                </div>
            </div>

            <ModalTransfers
                modal={transferModal}
                setModal={setTransferModal}
            />
        </ArchLayout>
    )
}