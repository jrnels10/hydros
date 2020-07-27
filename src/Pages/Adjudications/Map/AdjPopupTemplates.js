var measureThisAction = {
    title: "Manage",
    id: "measure-this",
};

export const POUTemp = (actions) => {
    return {
        title: "{POU_CODE}",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "POU_CODE",
                        label: "POU_CODE"
                    },
                    {
                        fieldName: "CLAIMANT",
                        label: "CLAIMANT"
                    }
                ]
            }
        ],
        actions: [measureThisAction]
    };
};


export const PODTemp = (actions) => {
    return {
        title: "Place of Use {DWR_ID}",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "DWR_ID",
                        label: "DWR_ID"
                    },
                    {
                        fieldName: "Use",
                        label: "Use"
                    },
                    {
                        fieldName: "Name",
                        label: "Name"
                    },
                    {
                        fieldName: "ContactName",
                        label: "Contact Name"
                    },
                    {
                        fieldName: "ContactPhone",
                        label: "Contact Phone"
                    }
                ]
            }
        ],
        actions: [measureThisAction]
    };
};