const codeData = [
    {
      "id": "1",
      "name": "C#",
      "description": "If you are using Visual Studio 2017 or higher, open nuget package manager window and type the following:",
      "code": "Install-Package Google.Apis"
    },
    {
      "id": "2",
      "name": "Go",
      "description": "",
      "code": "go get cloud.google.com/go/speech/apiv1"
    },
    {
      "id": "3",
      "name": "Java",
      "description": "If you are using Maven, add the following to your pom.xml file. For more information about BOMs, see The Google Cloud Platform Libraries BOM.",
      "code": "<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.google.cloud</groupId>\n      <artifactId>libraries-bom</artifactId>\n      <version>24.4.0</version>\n      <type>pom</type>\n      <scope>import</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n\n<dependencies>\n  <dependency>\n    <groupId>org.json</groupId>\n    <artifactId>json</artifactId>\n    <version>20211205</version>\n  </dependency>\n  <dependency>\n    <groupId>com.google.cloud</groupId>\n    <artifactId>google-cloud-speech</artifactId>\n  </dependency>\n</dependencies>"
    },
    {
      "id": "4",
      "name": "Node.js",
      "description": "",
      "code": "npm install --save @google-cloud/speech"
    },
    {
      "id": "5",
      "name": "PHP",
      "description": "",
      "code": "composer require google/apiclient"
    },
    {
      "id": "6",
      "name": "Python",
      "description": "",
      "code": "pip install --upgrade google-cloud-speech"
    },
    {
      "id": "7",
      "name": "Ruby",
      "description": "",
      "code": "gem install google-api-client"
    },
    { "id": "8", "name": "C++", "description": "", "code": "" },
    { "id": "9", "name": "Rust", "description": "", "code": "" },
    { "id": "10", "name": "Perl", "description": "", "code": "" },
    { "id": "11", "name": ".Net", "description": "", "code": "" },
    { "id": "12", "name": "TypeScript", "description": "", "code": "" },
    { "id": "13", "name": "Golang", "description": "", "code": "" },
    { "id": "14", "name": "Scala", "description": "", "code": "" },
    { "id": "15", "name": "C", "description": "", "code": "" },
    { "id": "16", "name": "Kotlin", "description": "", "code": "" },
    { "id": "17", "name": "Pharo", "description": "", "code": "" },
    { "id": "18", "name": "Haxe", "description": "", "code": "" },
    { "id": "19", "name": "OCaml", "description": "", "code": "" },
    { "id": "20", "name": "Elixir", "description": "", "code": "" }
  ]

  export default codeData;
