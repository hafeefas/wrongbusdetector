chrome.runtime.onInstalled.addListener (() => {
    chrome.storage.local.set({ apiKey: "f8d6ee9f-565b-4e88-bd56-67e1ec9adc21"}, () => {
        console.log("Api Key Secured");
    })
})