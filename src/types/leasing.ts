
export interface LeasingAgreement {
  id: string;
  partId: string;
  partName: string;
  asset_type: string;
  lessor: string;
  lessee: string;
  startDate: string;
  endDate: string;
  cost: number;
  status: 'active' | 'pending' | 'completed' | 'terminated';
  terms: string;
  contractHash: string;
}
