import React, { useEffect, useState } from "react";
import { container } from "@/config/dependencies";
import { GetEquipmentListUseCase } from "@/features/equipment/application/usecases/get-equipment-list-usecase";
import { IEquipment } from "@/features/equipment/domain/entities/equipment.entity";
import { SimpleTable } from "@/core/components/preline/Tables/SimpleTable";

export type EquipmentTableProps = {
    branchId: string;
}

export const EquipmentTable: React.FC<EquipmentTableProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [equipment, setEquipment] = useState<IEquipment[]>([]);

    const getEquipmentListUseCase = container.resolve<GetEquipmentListUseCase>("GetEquipmentListUseCase");

    const findEquipmentList = async () => {
        setIsLoading(true);
        setEquipment(await getEquipmentListUseCase.run(props.branchId));
        setIsLoading(false);
    }

    useEffect(() => {
        findEquipmentList();
    }, []);

    return (
        <SimpleTable
            columns={[
                {
                    id: "name",
                    name: "Sucursal"
                },
                {
                    id: "qty",
                    name: "Cantidad"
                },
                {
                    id: "description",
                    name: "Descripción"
                }
            ]}
            linked
            rows={equipment}
            isLoading={isLoading}
        />
    );
}