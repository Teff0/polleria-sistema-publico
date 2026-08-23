# Project

## Vision

Build a maintainable internal web system for one pollería in Peru. The system begins with sales, payments, cash management, and real electronic billing, and must be able to evolve without accumulating patches.

## Business scope

- One business.
- One physical location.
- Internal use.
- Online-first.
- Accessible from PC, laptop, and mobile web.
- Data hosted online for authorized remote access.

## Main operating flow

1. Cashier logs in.
2. Cashier opens a cash register session.
3. Cashier creates the sale.
4. Products are selected.
5. Backend calculates totals.
6. Customer pays.
7. Payments are validated.
8. Sale becomes PAID.
9. Receipt or invoice is issued.
10. Billing result is recorded.
11. Customer consumes after payment.

## V1

- Authentication.
- Users.
- Roles and permissions.
- Product catalog.
- Categories.
- Customers.
- Sales.
- Sale items.
- Payments.
- Combined payments.
- Cash register opening/closing.
- Cash movements.
- Electronic receipts.
- Electronic invoices.
- Electronic credit notes.
- Electronic billing provider integration through an internal port.
- Audit log.
- Business settings.
- Basic operational reporting as the project reaches the reporting phase.

## Initial roles

- Administrator.
- Cashier.

Authorization must be permission-based rather than scattered role checks.

## Initial payment methods

- Cash.
- Yape.
- Plin.
- Card.
- Bank transfer.

Combined payment is multiple Payment records, not a COMBINED payment method.

## Initial catalog examples

- 1/8 chicken.
- 1/4 chicken.
- 1/2 chicken.
- Whole chicken.
- Drinks.
- Sides.
- Combos.
- Extras.

Catalog content is configurable data, not hardcoded business logic.

## Electronic billing

Initial document types:

- electronic receipt;
- electronic invoice;
- electronic credit note.

A concrete PSE/provider will be selected later.

The provider must be replaceable behind an internal electronic billing abstraction.

## Out of scope for V1

- Inventory.
- Recipes.
- Kitchen workflow.
- Tables.
- Delivery.
- Offline mode.
- Native mobile applications.
- Multi-company.
- Multi-branch.
- Loyalty.
- Complex promotions.
- Microservices.
- CQRS.
- Event sourcing.
- Kubernetes.

## Future direction

Potential future modules include:

- inventory;
- kitchen;
- delivery;
- printing;
- notifications;
- offline operation;
- advanced reporting.

Future capabilities should be added when required, not prebuilt speculatively.

## Guiding principle

If a new feature does not fit the current model cleanly, evolve/refactor the model instead of adding scattered patches.
