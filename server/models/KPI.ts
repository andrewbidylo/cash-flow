import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Currency = require('mongoose-currency').loadType(mongoose);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
    expenses: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);


const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
    expenses: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: Currency,
      currency: "CAD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Currency,
        currency: "CAD",
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;