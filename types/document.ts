export type DocumentType = 
  | 'chi-thi'
  | 'nghi-quyet'
  | 'thong-tu'
  | 'quyet-dinh'
  | 'huong-dan'
  | 'ke-hoach'
  | 'thong-bao';

export type IssuingAuthority = 
  | 'vksnd-toi-cao'
  | 'quoc-hoi'
  | 'uy-ban-thuong-vu-quoc-hoi'
  | 'chinh-phu'
  | 'lien-tich';

export interface LegalDocument {
  id: string;
  code: string; // e.g. "01/CT-VKSTC", "03/2024/TT-VKSTC"
  title: string;
  summary: string;
  documentType: DocumentType;
  documentTypeName: string;
  issuingAuthority: IssuingAuthority;
  issuingAuthorityName: string;
  signDate: string;
  effectiveDate: string;
  signer: string;
  signerPosition: string;
  status: 'con-hieu-luc' | 'het-hieu-luc' | 'chua-hieu-luc';
  fullContent?: string;
  files: {
    name: string;
    type: 'pdf' | 'docx' | 'doc';
    size: string;
    downloadUrl: string;
  }[];
  relatedDocuments?: {
    id: string;
    code: string;
    title: string;
  }[];
}

export interface DocumentFilterParams {
  keyword?: string;
  code?: string;
  type?: string;
  authority?: string;
  year?: string;
  page: number;
  pageSize: number;
}
