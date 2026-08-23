# Domain Model

## User

Purpose: system operator identity.

Conceptual fields:

- id
- name
- username/email
- passwordHash
- role/permissions relationship
- active
- timestamps

Must not store plaintext passwords.

## Role

Initial roles:

- ADMIN
- CASHIER

Role names should not be the only authorization mechanism.

## Permission

Examples:

- SALE_CREATE
- SALE_VIEW
- SALE_CANCEL
- PRODUCT_CREATE
- PRODUCT_UPDATE
- PRODUCT_DISABLE
- BILLING_ISSUE
- BILLING_CREDIT_NOTE
- CASH_OPEN
- CASH_CLOSE
- USER_MANAGE
- REPORT_VIEW
- SETTINGS_UPDATE
- AUDIT_VIEW

## Category

Purpose: catalog grouping.

Fields:

- id
- name
- active
- timestamps

## Product

Purpose: sellable catalog item.

Fields:

- id
- categoryId
- name
- description
- price
- active
- timestamps

Historical sales do not depend on current Product price/name.

## Customer

Conceptual types:

- GENERIC
- PERSON
- COMPANY

Fields may include:

- id
- type
- documentType
- documentNumber
- name
- businessName
- address
- email
- phone
- active
- timestamps

## Sale

States:

- DRAFT
- PAID
- CANCELLED

Conceptual fields:

- id
- saleNumber
- customerId
- cashRegisterId
- status
- subtotal
- discountTotal
- taxTotal
- total
- createdBy
- createdAt
- paidAt
- cancelledAt
- cancelledBy

Responsibilities:

- represent the commercial transaction;
- enforce valid state transitions;
- preserve financial totals/history.

Must not know about HTTP, Prisma, or a concrete billing provider.

## SaleItem

Snapshot fields:

- id
- saleId
- productId
- productName
- quantity
- unitPrice
- discountAmount
- taxAmount
- lineTotal

Purpose: preserve exactly what was sold.

## PaymentMethod

Conceptual fields:

- id
- code
- name
- active
- affectsCash
- requiresReference

Initial codes:

- CASH
- YAPE
- PLIN
- CARD
- BANK_TRANSFER

## Payment

Fields:

- id
- saleId
- paymentMethodId/code
- amount
- reference
- optional amountTendered/change data when appropriate
- createdBy
- createdAt

Combined payment is multiple Payment records.

## BillingDocument

Types:

- RECEIPT
- INVOICE
- CREDIT_NOTE

Statuses:

- PENDING
- PROCESSING
- ACCEPTED
- REJECTED
- ERROR

Conceptual fields:

- id
- saleId
- type
- series
- number
- status
- tax/customer snapshot
- subtotal
- taxTotal
- total
- provider
- providerReference
- referenceDocumentId
- xmlLocation
- cdrLocation
- pdfLocation
- issuedAt
- acceptedAt
- timestamps

Billing state is independent of Sale state.

## CashRegister

States:

- OPEN
- CLOSED

Fields:

- id
- status
- openedBy
- openedAt
- openingAmount
- closedBy
- closedAt
- expectedCash
- countedCash
- difference
- createdAt

## CashMovement

Types:

- OPENING
- SALE
- INCOME
- WITHDRAWAL
- EXPENSE
- ADJUSTMENT

Fields:

- id
- cashRegisterId
- type
- amount
- description
- optional saleId
- createdBy
- createdAt

## AuditLog

Fields:

- id
- userId
- action
- entityType
- entityId
- metadata
- createdAt

Do not store secrets.

## BusinessSettings

Single-business configuration:

- legalName
- businessName
- ruc
- address
- phone
- currency
- timezone
- logoLocation
- timestamps

Initial currency: PEN.

Initial timezone: America/Lima.
