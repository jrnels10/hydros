var measureThisAction = {
    title: "Manage",
    id: "measure-this",
};

export const POUTemp = (actions) => {
    return {
        title: "{REGISTRY_ID}",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "REGISTRY_ID",
                        label: "REGISTRY_ID"
                    },
                    {
                        fieldName: "OWNER_NAME",
                        label: "OWNER_NAME"
                    }
                ]
            }
        ],
        actions: [measureThisAction]
    };
};