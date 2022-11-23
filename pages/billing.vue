<template>
  <div class="grid gap-4">
    <!-- card 1 -->
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-3 flex flex-col gap-4">
        <!-- credit card and 2 boxes -->
        <div class="col-span-3 grid grid-cols-4 gap-4">
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
    <div class="grid grid-cols-7 gap-4">
      <!-- billing information -->
      <div class="col-span-4 container-card">
        <MiscTitle title="Billing Information" />
        <div class="flex flex-col gap-4">
          <BillingInformationCard v-for="item in 3" :key="item" />
        </div>
      </div>

      <!-- transaction -->
      <div class="container-card col-span-3">
        <MiscTitle title="Your Transaction" />
        <BillingTransactionCard />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
