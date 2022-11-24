<template>
  <div class="grid gap-4">
    <!-- card 1 -->
    <div class="flex flex-col xl:grid-cols-5 gap-4">
      <div class="col-span-3 flex flex-col gap-4">
        <!-- credit card and 2 boxes -->
        <div
          class="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <!-- credit card -->
          <BillingCreditCard />

          <!-- boxes white -->
          <BillingBoxSmall v-for="item in 2" :key="item" />
        </div>

        <!-- payload method -->
        <BillingPaymentMethod />
      </div>

      <!-- invoices -->
      <BillingInvoice />
    </div>

    <!-- card 2 -->
    <div class="flex flex-col xl:grid-cols-5 gap-4">
      <!-- billing information -->
      <div class="col-span-3 container-card">
        <MiscTitle title="Billing Information" />
        <div class="flex flex-col gap-4">
          <BillingInformationCard v-for="item in 3" :key="item" />
        </div>
      </div>

      <!-- transaction -->
      <div class="container-card lg:col-span-2">
        <MiscTitle title="Your Transaction" />
        <BillingTransactionCard />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
