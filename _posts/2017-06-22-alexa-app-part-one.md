---
title: "Alexa App Part One: Creating an Alexa Skill Kit Application"
layout: post
date: 2017-06-23 22:25
image: /assets/images/markdown.jpg
headerImage: false
tag:
- alexa
- skill-kit
- voice recognition
category: blog
author: craiglangford
description: How to build an Alexa Skill Kit Application
---
Having just received an Amazon Echo I made the typical requests "Alexa, play X song," "Alexa, tell me the weather," "Alexa, what is the news for today?" Wondering the current price of Bitcoin, which has been shooting up over the past month, I asked my Echo "Alexa, what is the price of Bitcoin?" This was responded with "sorry, I can't help you with that." I was rather surprised as the Echo can handle any other currency conversion, which lead to my first idea for an Amazon Echo application - Crypto Price. This blog post and it's follow up [Alexa App Part 2 - AWS Lambda Function](LINK) are an overview of the steps needed to create your first Echo application.If you wish to dive straight in the source code is [here](https://github.com/CraigLangford/Crypto-Price)!

## Application Focus

Looking through the Echo applications that already exists there can be seen to be quite a few Bitcoin price applications already. These appear to be sufficient to gather the Bitcoin Price in US Dollars by requesting something like "Alexa, load Bitcoin Price," however, they do not seem to support any other cryptocurrencies (for which there are hundreds) and are limited to very few currencies (I'm situated in England and the price in pounds would be much more useful).

*Other Bitcoin Price Applications*
<img class="image" src="{{ site.url }}/assets/images/other_bitcoin_apps.png" alt="Other Bitcoin Price Applications">

## Creating the Alexa Skill Kit Application

To create an Alexa Skill Kit app you must first create an account at https://developer.amazon.com. Once logged in, click on the `Alexa` tab and click on `Add a New Skill`.

*Creating a New Alexa Skill Kit Application*
<img class="image" src="{{ site.url }}/assets/images/add_a_new_skill.png" alt="Creating a New Alexa Skill Kit Application">

### Skill Information Page

You should now be on the `Skill Information Page` of your Alexa Skill Kit Application! Here you can input the title, Crypto Price, as well as the invocation name, which is whatever you tell Alexa to load the price. Unfortunately, the same name cannot be used twice, so crypto price will not work. You'll have to come up with something creative for your app's invocation name! For mine I'll use awesome prices. There should be no need to change the remaining features. Keep them as below:

* Skill Type: Custom Interaction Model
* Title: Crypto Price
* Invocation Name: **Your Own Unique Name**
* Language: English
* Audio Player: No

*Input a Title and Come Up With a Unique Invocation Name*
<img class="image" src="{{ site.url }}/assets/images/skill_information_page.png" alt="Skill Information Page">

### Skills Builder

After clicking next you should be on the `Skills Builder Page`. From here you'll want to click on the new Beta interactive model which allows you to easily create your skill. Once entering the Skill Builder you should be on the dashboard.

**Be sure to click `Save` at the top often, otherwise all your progress will be lost!**

The first thing you'll want to do is create a new Intent. An Intent is when the user has an Intention to do something. In this case it'll be to get the crypto price. Click on `Add+` on the intents and create a new intent called CryptoPriceIntent.

*Create New Intent Called CryptoPriceIntent*
<img class="image" src="{{ site.url }}/assets/images/create_new_intent.png" alt="Create Crypto Price Intent">

Here is where the real power of the Alexa Skill Kit App comes into play. You can easily add any sort of things a user might say so Alexa can easily decipher what is needed for your backend application. An example for our application would be something like "What is the price of Bitcoin in US dollars" In this utterance "Bitcoin" and "US dollars" can be interchanged with any other cryptocurrency and currency. These features are called "slots" in the Alexa Skills Kit App and are the key components the backend wants. To tell Alexa which word is a slot you simply put curly braces around the slot position. For example:

*"What is the price of Bitcoin in US Dollars"* becomes *"What is the price of {cryptocurrency} in {currency}"*

Below are a list of different types of utterances I added which I expect the user might ask. Add all of these yourself and try adding any others you think a user might ask!

*Possible Utterances*
<img class="image" src="{{ site.url }}/assets/images/sample_utterances.png" alt="Sample Utterances">

Now, the slots aren't much use if the Alexa Skill Kit doesn't know what to expect for these. Furthermore, having a list of expected results would allow the App to be much more accurate when a user requests a certain price. This is exactly what `Slot Types` are for. On the left side of the application click on `Add+` next to `Slot Types` to create a new slot for {cryptocurrencies} and click it again to create a new slot for {currency}.

*Create Two New Slots*
<img class="image" src="{{ site.url }}/assets/images/create_slot.png" alt="Adding Slots">

You should have your two slots ({cryptocurrency} and {currency}). Go to the page for {cryptocurrency} and see you can insert any possible values for this slot. Let's insert some trending cryptocurrencies into our list. In addition we can include their respective 3 letter symbol in case the user wants to try asking something like "give me the price of BTC."

* Bitcoin
* BTC
* Ripple
* XRP
* Ethereum
* ETH
* Litecoin
* LTC
* Monero
* XMR

*Possible Values for the {cryptocurrency} Slot*
<img class="image" src="{{ site.url }}/assets/images/cryptocurrency_values.png" alt="Cryptocurrency Slots">

Follow the same steps for the currency slot and include values such as US Dollars, USD, Canadian dollars, CAD, pounds, GBP, etc. Now go back to your CryptoPriceIntent and select the appropriate `Slot Type` for the {cryptocurrency} and {currency} slots.

*Assign the Slots to the New Slot Types*
<img class="image" src="{{ site.url }}/assets/images/slot_types.png" alt="Cryptocurrency Slots">

Now you're done creating your Alexa Skill Kit Model! Now click `Save` and `Build` at the top to finish the process. The model should be completed after a few minutes!
