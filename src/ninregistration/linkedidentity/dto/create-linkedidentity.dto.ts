import { CreateBiodatumDto } from "src/ninregistration/biodata/dto/create-biodatum.dto";

export class CreateLinkedidentityDto {
    readonly NIN: string;
    readonly BVN: string;
    readonly mobilenumber: string;
}
