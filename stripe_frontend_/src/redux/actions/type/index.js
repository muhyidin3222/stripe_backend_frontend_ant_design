//GENERAL
const COLLAPSED = "COLLAPSED"
const INNER_WIDTH = "INNER_WIDTH"

//AUTH
const GET_REQUEST = 'GET_REQUEST'
const GET_SUCCESS = 'GET_SUCCESS'
const GET_FAILURE = 'GET_FAILURE'

const SAVING_REQUEST = 'SAVING_REQUEST'
const SAVING_SUCCESS = 'SAVING_SUCCESS'
const SAVING_FAILURE = 'SAVING_FAILURE'

const DELETING_REQUEST = 'DELETING_REQUEST'
const DELETING_SUCCESS = 'DELETING_SUCCESS'
const DELETING_FAILURE = 'DELETING_FAILURE'

const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"

const LOGOUT_REQUEST = "LOGOUT_REQUEST"
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
const LOGOUT_FAILURE = "LOGOUT_FAILURE"

const VERIFY_REQUEST = "VERIFY_REQUEST"
const VERIFY_SUCCESS = "VERIFY_SUCCESS"

//BALANCES
const BALANCES_CREATE_BANK_ACCOUNT = "BALANCES_CREATE_BANK_ACCOUNT"
const GET_BALANCE_RETRIEVE = 'GET_BALANCE_RETRIEVE'
const CUSTOMERS_CREATE_COURCE = 'CUSTOMERS_CREATE_COURCE'

///ISSUING_CARDHOLDER
const ISSUING_CARDHOLDER_GET = 'ISSUING_CARDHOLDER_GET'
const ISSUING_CARDHOLDER_CREATE = 'ISSUING_CARDHOLDER_CREATE'
const ISSUING_CARDHOLDER_UPDATE = 'ISSUING_CARDHOLDER_UPDATE'
const ISSUING_CARDHOLDER_GET_ID = 'ISSUING_CARDHOLDER_GET_ID'


///ISSUING_CARD
const ISSUING_CARD_GET = 'ISSUING_CARD_GET'
const ISSUING_CARD_CREATE = 'ISSUING_CARD_CREATE'
const ISSUING_CARD_UPDATE = 'ISSUING_CARD_UPDATE'
const ISSUING_CARD_GET_ID = 'ISSUING_CARD_GET_ID'

//LOADING
const LOADING_GET = "LOADING_GET"
const LOADING_CREATE = "LOADING_CREATE"
const LOADING_UPDATE = "LOADING_UPDATE"
const LOADING_GET_ID = "LOADING_GET_ID"
const LOADING_DELETE = "LOADING_DELETE"

///DISPUTES_CARD
const DISPUTES_GET = 'DISPUTES_GET'
const DISPUTES_CREATE = 'DISPUTES_CREATE'
const DISPUTES_UPDATE = 'DISPUTES_UPDATE'
const DISPUTES_GET_ID = 'DISPUTES_GET_ID'

///TRANSACTIONS
const TRANSACTIONS_GET = 'TRANSACTIONS_GET'
const TRANSACTIONS_CREATE = 'TRANSACTIONS_CREATE'
const TRANSACTIONS_UPDATE = 'TRANSACTIONS_UPDATE'
const TRANSACTIONS_GET_ID = 'TRANSACTIONS_GET_ID'

///PRODUCTS
const PRODUCTS_GET = 'PRODUCTS_GET'
const PRODUCTS_CREATE = 'PRODUCTS_CREATE'
const PRODUCTS_UPDATE = 'PRODUCTS_UPDATE'
const PRODUCTS_GET_ID = 'PRODUCTS_GET_ID'
const PRODUCTS_DELETE = "PRODUCTS_DELETE"

//PRICES
const PRICES_CREATE = "PRICES_CREATE"
const PRICES_UPDATE = "PRICES_UPDATE"
const PRICES_GET = "PRICES_GET"
const PRICES_GET_ID = "PRICES_GET_ID"

//PRMOTIONS
const PROMOTIONS_CREATE = "PROMOTIONS_CREATE"
const PROMOTIONS_UPDATE = "PROMOTIONS_UPDATE"
const PROMOTIONS_GET = "PROMOTIONS_GET"
const PROMOTIONS_GET_ID = "PROMOTIONS_GET_ID"

//CUPONS
const CUPONS_CREATE = "CUPONS_CREATE"
const CUPONS_UPDATE = "CUPONS_UPDATE"
const CUPONS_GET = "CUPONS_GET"
const CUPONS_GET_ID = "CUPONS_GET_ID"

//TEX_RATE
const TEX_RATE_CREATE = "TEX_RATE_CREATE"
const TEX_RATE_UPDATE = "TEX_RATE_UPDATE"
const TEX_RATE_GET = "TEX_RATE_GET"
const TEX_RATE_GET_ID = "TEX_RATE_GET_ID"

//TEX_CODE
const TEX_CODE_CREATE = "TEX_CODE_CREATE"
const TEX_CODE_UPDATE = "TEX_CODE_UPDATE"

//CHARGES
const CHARGES_CREATE = "CHARGES_CREATE"
const CHARGES_UPDATE = "CHARGES_UPDATE"
const CHARGES_GET = "CHARGES_GET"
const CHARGES_GET_ID = "CHARGES_GET_ID"
const CHARGES_CAPTURE = "CHARGES_CAPTURE"

//CUSTOMERS
const CUSTOMERS_CREATE = "CUSTOMERS_CREATE"
const CUSTOMERS_UPDATE = "CUSTOMERS_UPDATE"
const CUSTOMERS_GET = "CUSTOMERS_GET"
const CUSTOMERS_GET_ID = "CUSTOMERS_GET_ID"
const CUSTOMERS_DELETE = "CUSTOMERS_DELETE"

//PAYMENT
const PAYMENT_CREATE = "PAYMENT_CREATE"
const PAYMENT_UPDATE = "PAYMENT_UPDATE"
const PAYMENT_GET = "PAYMENT_GET"
const PAYMENT_GET_ID = "PAYMENT_GET_ID"
const PAYMENT_CONFIRM = "PAYMENT_CONFIRM"
const PAYMENT_CAPTURE = "PAYMENT_CAPTURE"
const PAYMENT_CANCEL = "PAYMENT_CANCEL"

//PAYMENT_DISPUTES
const PAYMENT_DISPUTES_CREATE = "PAYMENT_DISPUTES_CREATE"
const PAYMENT_DISPUTES_UPDATE = "PAYMENT_DISPUTES_UPDATE"
const PAYMENT_DISPUTES_GET = "PAYMENT_DISPUTES_GET"
const PAYMENT_DISPUTES_GET_ID = "PAYMENT_DISPUTES_GET_ID"

//PAYMENT_DISPUTES
const REFUNDS_CREATE = "REFUNDS_CREATE"
const REFUNDS_UPDATE = "REFUNDS_UPDATE"
const REFUNDS_GET = "REFUNDS_GET"
const REFUNDS_GET_ID = "REFUNDS_GET_ID"

///AUTHORIZATIONS
const AUTHORIZATIONS_GET = "AUTHORIZATIONS_GET"
const AUTHORIZATIONS_DECLINE = "AUTHORIZATIONS_DECLINE"
const AUTHORIZATIONS_APPROVE = "AUTHORIZATIONS_APPROVE"
const AUTHORIZATIONS_UPDATE = "AUTHORIZATIONS_UPDATE"
const AUTHORIZATIONS_GET_ID = "AUTHORIZATIONS_GET_ID"

///EVENT
const EVENT_GET = "EVENT_GET"
const EVENT_GET_ID = "EVENT_GET_ID"

//PAYOUT_DISPUTES
const PAYOUT_CREATE = "PAYOUT_CREATE"
const PAYOUT_UPDATE = "PAYOUT_UPDATE"
const PAYOUT_GET = "PAYOUT_GET"
const PAYOUT_GET_ID = "PAYOUT_GET_ID"
const PAYOUT_CANCEL = "PAYOUT_CANCEL"

//TOPUP_DISPUTES
const TOPUP_CREATE = "TOPUP_CREATE"
const TOPUP_UPDATE = "TOPUP_UPDATE"
const TOPUP_GET = "TOPUP_GET"
const TOPUP_GET_ID = "TOPUP_GET_ID"

//TRANSFERS_DISPUTES
const TRANSFERS_CREATE = "TRANSFERS_CREATE"
const TRANSFERS_UPDATE = "TRANSFERS_UPDATE"
const TRANSFERS_GET = "TRANSFERS_GET"
const TRANSFERS_GET_ID = "TRANSFERS_GET_ID"

//INVOICES
const INVOICES_CREATE = "INVOICES_CREATE"
const INVOICES_GET_ID = "INVOICES_GET_ID"
const INVOICES_DELETE = "INVOICES_DELETE"
const INVOICES_LIST = "INVOICES_LIST"
const INVOICES_UPDATE = "INVOICES_UPDATE"
const INVOICES_FINALIZE_INVOICE = "INVOICES_FINALIZE_INVOICE"
const INVOICES_PAY = "INVOICES_PAY"
const INVOICES_SEND_INVOICE = "INVOICES_SEND_INVOICE"
const INVOICES_VOID_INVOICE = "INVOICES_VOID_INVOICE"
const INVOICES_MARK_UNCOLLECTIBLE = "INVOICES_MARK_UNCOLLECTIBLE"
const INVOICES_LIST_LINE_ITEM = "INVOICES_LIST_LINE_ITEM"
const INVOICES_RETRIEVE_UPCOMING = "INVOICES_RETRIEVE_UPCOMING"
const INVOICES_LIST_UPCOMING_LINE_ITEM = "INVOICES_LIST_UPCOMING_LINE_ITEM"

//SUBSCRIPTIONS
const SUBSCRIPTIONS_CREATE = "SUBSCRIPTIONS_CREATE"
const SUBSCRIPTIONS_UPDATE = "SUBSCRIPTIONS_UPDATE"
const SUBSCRIPTIONS_GET = "SUBSCRIPTIONS_GET"
const SUBSCRIPTIONS_GET_ID = "SUBSCRIPTIONS_GET_ID"
const SUBSCRIPTIONS_DELETE = "SUBSCRIPTIONS_DELETE"

//QUOTE
const QUOTE_CREATE = "QUOTE_CREATE"
const QUOTE_GET_ID = "QUOTE_GET_ID"
const QUOTE_GET = "QUOTE_GET"
const QUOTE_DELETE = "QUOTE_DELETE"
const QUOTE_LIST = "QUOTE_LIST"
const QUOTE_UPDATE = "QUOTE_UPDATE"
const QUOTE_FINALIZE = "QUOTE_FINALIZE"
const QUOTE_ACCEPT = "QUOTE_ACCEPT"
const QUOTE_PDF = "QUOTE_PDF"
const QUOTE_LIST_COMPUTED_UP_FRONT_LINE_ITEMS = "QUOTE_LIST_COMPUTED_UP_FRONT_LINE_ITEMS"
const QUOTE_LIST_LINE_ITEM = "QUOTE_LIST_LINE_ITEM"

//PAYMENT_METHOD
const PAYMENT_METHOD_CREATE = "PAYMENT_METHOD_CREATE"
const PAYMENT_METHOD_UPDATE = "PAYMENT_METHOD_UPDATE"
const PAYMENT_METHOD_GET = "PAYMENT_METHOD_GET"
const PAYMENT_METHOD_GET_ID = "PAYMENT_METHOD_GET_ID"

//INVOICE_ITEM
const INVOICE_ITEM_CREATE = "INVOICE_ITEM_CREATE"
const INVOICE_ITEM_UPDATE = " INVOICE_ITEM_UPDATE"
const INVOICE_ITEM_GET = " INVOICE_ITEM_GET"
const INVOICE_ITEM_GET_ID = " INVOICE_ITEM_GET_ID"
const INVOICE_ITEM_DELETE = " INVOICE_ITEM_DELETE"

//CHECKOUT
const CHECKOUT_GET = "CHECKOUT_GET"

//PAYMENT_METHOD
const REVIEW_APPROVE = "REVIEW_CREATE"
const REVIEW_GET_ID = "REVIEW_GET_ID"
const REVIEW_LIST = "REVIEW_LIST"

//APPLICATION
const APPLICATION_LIST = "APPLICATION_LIST"
const APPLICATION_GET_ID = "APPLICATION_GET_ID"

const GET_BALANCE_TRANSACTION = "GET_BALANCE_TRANSACTION"

//ACCOUNT
const ACCOUNT_CREATE = "ACCOUNT_CREATE"
const ACCOUNT_UPDATE = "ACCOUNT_UPDATE"
const ACCOUNT_GET = "ACCOUNT_GET"
const ACCOUNT_GET_ID = "ACCOUNT_GET_ID"

const ERROR_CREATE = "ERROR_CREATE"
const ERROR_UPDATE = 'ERROR_UPDATE'
const ERROR_GET = 'ERROR_GET'
const ERROR_GET_ID = "ERROR_GET_ID"
const ERROR_DELETE = "ERROR_DELETE"

const CUSTOMERS_BANK = "CUSTOMERS_BANK"

export {
    COLLAPSED,
    INNER_WIDTH,

    BALANCES_CREATE_BANK_ACCOUNT,
    GET_REQUEST,
    GET_BALANCE_RETRIEVE,
    CUSTOMERS_CREATE_COURCE,

    ISSUING_CARDHOLDER_GET,
    ISSUING_CARDHOLDER_CREATE,
    ISSUING_CARDHOLDER_UPDATE,
    ISSUING_CARDHOLDER_GET_ID,

    LOADING_GET,
    LOADING_CREATE,
    LOADING_UPDATE,
    LOADING_GET_ID,
    LOADING_DELETE,

    ISSUING_CARD_GET,
    ISSUING_CARD_CREATE,
    ISSUING_CARD_UPDATE,
    ISSUING_CARD_GET_ID,

    DISPUTES_GET,
    DISPUTES_CREATE,
    DISPUTES_UPDATE,
    DISPUTES_GET_ID,

    TRANSACTIONS_GET,
    TRANSACTIONS_CREATE,
    TRANSACTIONS_UPDATE,
    TRANSACTIONS_GET_ID,

    PRODUCTS_GET,
    PRODUCTS_CREATE,
    PRODUCTS_UPDATE,
    PRODUCTS_GET_ID,
    PRODUCTS_DELETE,

    PRICES_CREATE,
    PRICES_UPDATE,
    PRICES_GET,
    PRICES_GET_ID,

    PROMOTIONS_CREATE,
    PROMOTIONS_UPDATE,
    PROMOTIONS_GET,
    PROMOTIONS_GET_ID,

    CUPONS_CREATE,
    CUPONS_UPDATE,
    CUPONS_GET,
    CUPONS_GET_ID,


    TEX_RATE_CREATE,
    TEX_RATE_UPDATE,
    TEX_RATE_GET,
    TEX_RATE_GET_ID,

    TEX_CODE_CREATE,
    TEX_CODE_UPDATE,

    CHARGES_CREATE,
    CHARGES_UPDATE,
    CHARGES_GET,
    CHARGES_GET_ID,
    CHARGES_CAPTURE,

    CUSTOMERS_CREATE,
    CUSTOMERS_UPDATE,
    CUSTOMERS_GET,
    CUSTOMERS_GET_ID,
    CUSTOMERS_DELETE,

    PAYMENT_CREATE,
    PAYMENT_UPDATE,
    PAYMENT_GET,
    PAYMENT_GET_ID,
    PAYMENT_CONFIRM,
    PAYMENT_CAPTURE,
    PAYMENT_CANCEL,

    PAYMENT_DISPUTES_CREATE,
    PAYMENT_DISPUTES_UPDATE,
    PAYMENT_DISPUTES_GET,
    PAYMENT_DISPUTES_GET_ID,

    REFUNDS_CREATE,
    REFUNDS_UPDATE,
    REFUNDS_GET,
    REFUNDS_GET_ID,

    AUTHORIZATIONS_GET,
    AUTHORIZATIONS_DECLINE,
    AUTHORIZATIONS_APPROVE,
    AUTHORIZATIONS_UPDATE,
    AUTHORIZATIONS_GET_ID,

    EVENT_GET,
    EVENT_GET_ID,

    PAYOUT_CREATE,
    PAYOUT_UPDATE,
    PAYOUT_GET,
    PAYOUT_GET_ID,
    PAYOUT_CANCEL,

    TOPUP_CREATE,
    TOPUP_UPDATE,
    TOPUP_GET,
    TOPUP_GET_ID,

    TRANSFERS_CREATE,
    TRANSFERS_UPDATE,
    TRANSFERS_GET,
    TRANSFERS_GET_ID,

    INVOICES_GET_ID,
    INVOICES_DELETE,
    INVOICES_LIST,
    INVOICES_UPDATE,
    INVOICES_FINALIZE_INVOICE,
    INVOICES_PAY,
    INVOICES_SEND_INVOICE,
    INVOICES_VOID_INVOICE,
    INVOICES_MARK_UNCOLLECTIBLE,
    INVOICES_LIST_LINE_ITEM,
    INVOICES_RETRIEVE_UPCOMING,
    INVOICES_LIST_UPCOMING_LINE_ITEM,
    INVOICES_CREATE,

    SUBSCRIPTIONS_CREATE,
    SUBSCRIPTIONS_UPDATE,
    SUBSCRIPTIONS_GET,
    SUBSCRIPTIONS_GET_ID,
    SUBSCRIPTIONS_DELETE,

    QUOTE_CREATE,
    QUOTE_GET_ID,
    QUOTE_DELETE,
    QUOTE_LIST,
    QUOTE_UPDATE,
    QUOTE_FINALIZE,
    QUOTE_ACCEPT,
    QUOTE_PDF,
    QUOTE_LIST_COMPUTED_UP_FRONT_LINE_ITEMS,
    QUOTE_LIST_LINE_ITEM,
    QUOTE_GET,

    PAYMENT_METHOD_CREATE,
    PAYMENT_METHOD_UPDATE,
    PAYMENT_METHOD_GET,
    PAYMENT_METHOD_GET_ID,

    INVOICE_ITEM_CREATE,
    INVOICE_ITEM_UPDATE,
    INVOICE_ITEM_GET,
    INVOICE_ITEM_GET_ID,
    INVOICE_ITEM_DELETE,

    CHECKOUT_GET,

    REVIEW_APPROVE,
    REVIEW_GET_ID,
    REVIEW_LIST,

    APPLICATION_LIST,
    APPLICATION_GET_ID,

    GET_BALANCE_TRANSACTION,

    ACCOUNT_CREATE,
    ACCOUNT_UPDATE,
    ACCOUNT_GET,
    ACCOUNT_GET_ID,

    ERROR_CREATE,
    ERROR_UPDATE,
    ERROR_GET,
    ERROR_GET_ID,
    ERROR_DELETE,

    GET_SUCCESS,
    GET_FAILURE,
    SAVING_REQUEST,
    SAVING_SUCCESS,
    SAVING_FAILURE,
    DELETING_REQUEST,
    DELETING_SUCCESS,
    DELETING_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,

    CUSTOMERS_BANK,
}