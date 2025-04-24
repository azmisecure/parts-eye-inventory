
// Update the LeasingAgreement interface
export interface LeasingAgreement {
  id: string;
  partId: string;
  partName: string;
  asset_type: string;  // Add this field
  lessor: string;
  lessee: string;
  startDate: string;
  endDate: string;
  cost: number;
  status: 'active' | 'pending' | 'completed' | 'terminated';
  terms: string;
  contractHash: string;
}

// Update the sample leasing agreements
export const sampleLeasingAgreements: LeasingAgreement[] = [
  {
    id: '1',
    partId: '2',
    partName: 'Fuel Pump',
    asset_type: 'aircraft',  // Add this field
    lessor: 'AeroParts Inc',
    lessee: 'Sky Airlines',
    startDate: '2025-04-01',
    endDate: '2025-07-01',
    cost: 2500.00,
    status: 'active',
    terms: 'Quarterly maintenance required, insurance included',
    contractHash: '0x7f8e9d5a3b1c6f4e2d9a8b7c6f5e4d3a2b1c0f9e',
  }
];
