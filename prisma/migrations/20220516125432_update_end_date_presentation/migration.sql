/*
  Warnings:

  - A unique constraint covering the columns `[id,deliveryman_id]` on the table `deliveries` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "deliveries_id_deliveryman_id_key" ON "deliveries"("id", "deliveryman_id");
