**Local App Router Set up**

Run npm start from this folder to run the CF Cockpit app locally. 

In order to run the app against the locally deployed Java backend services, change the destinations in default-env.json to point to the local instances.

This would require one more file to be added named **default-services.json** whose contents should look like below:

```JSON
{
    "uaa": {
        "tenantmode": "dedicated",
        "sburl": "",
        "clientid": "",
        "xsappname": "",
        "clientsecret": "",
        "url": "",
        "uaadomain": "authentication.sap.hana.ondemand.com",
        "verificationkey": "",
        "apiurl": "https://api.authentication.sap.hana.ondemand.com",
        "identityzone": "",
        "identityzoneid": "",
        "tenantid": ""
    }
}

```
The details can be obtained from the xsuaa binding in CF for your app. Copy the xsuaa object content and replace it in the above json.

Be careful not to inadvertently commit the XSUAA clientid/secret to the Git repo - For this reason, the file has been added to .gitignore. Use only local copy for development. No need to push this file to the repo.

Run index-local.html to make use of local UI5 Resources. 
Place the ui5 resources folder in path so that it follows this structure:
<pre>
.
├── README.md
├── cf.cockpit
├── localAppRouter
├── mta-neo.yaml
├── mta-uat.mtaext
├── mta.yaml
├── mta_cf.cockpit_appRouter
├── mta_cf.cockpit_ui_deployer
<b>├── ui5
│   └── <i>resources</i></b>
└── xs-security.json
</pre>

Download UI5 content from [SAP HANA Tools -> SAPUI5 Runtime / SAPUI5 SDK](https://tools.hana.ondemand.com/#sapui5)
