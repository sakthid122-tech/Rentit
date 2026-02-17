-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "propertyType" TEXT NOT NULL,
    "propertyName" TEXT NOT NULL,
    "bhkType" TEXT NOT NULL,
    "floorNumber" INTEGER NOT NULL,
    "totalFloors" INTEGER NOT NULL,
    "description" TEXT,
    "preferredTenant" TEXT NOT NULL,
    "builtUpArea" DOUBLE PRECISION NOT NULL,
    "propertyAge" TEXT NOT NULL,
    "facing" TEXT NOT NULL,
    "noticePeriod" INTEGER NOT NULL,
    "occupancy" TEXT NOT NULL,
    "availableFrom" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "landmark" TEXT,
    "pincode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
