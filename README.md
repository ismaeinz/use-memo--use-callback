النهاردة هتتكلم عن الـperformance في الـreactJs :

هنبدأ كلامنا بـ الـmemo ؟

الـmemo فكرتها انها بتعملك cashing للـ انبوت والأوتبوت ال عندك لو مفيش عليهم تغير

في الـreactJs نقدر نعملـmemo للـ كومبونانت والفانكشن وكمان الفاليو الراجعة من الفانكشن

فمثلا عندك في المثال الأول :
  <img src="/e1.png" width="350" >

عبارة عن كومبوننت اسمها     Child  داخلها كونسول لوج .. عشان أعرف هل الكومبوننت دي
هتترندر ولا لأ ؟

وبعدين بستدعيها في الـِApp
وفي الـApp عندي كاونتر بسيط بيزود واحد

لما باجي أزود الكاونتر بيحصل ريريندر لكل من الـApp والـChild طب ليه ؟
في حين إن التغير بيكون في الـApp بس

تعالي أفكرك ايمتا بيحصل ريندر للكومبوننت في تلات حالات
أول ما تفتح الـDom
لو حصل تغير في الـprops
لو حصل تغير في الـstate
طب ازاي أمنع الـChild من إنها تترندر هنا ياجي دور الـmemo
الـmemo يا سيدي ببساطة هتكيش الـChild وما دام مفيش تغير هيتم عليها اذن هتمنع اعادة رندرتها

طبعا خلي بالك لو أرسلت أي بروبس للـChild هتترندر
بس الـmemo فيها عيب اي هو ؟ بص ع المثال التاني
مثال عادي كل ال عملته اني أرسلت الكاونتر كـprops للـChild وعملتـinput بسيط
طبعا كل ما هتزود الكاونتر هتعمل ريريندر للـchild ولكن مهما تغير في الـinput مش هيحصل ريرندر للـChild ودي حاجه منطقية

بص ع المثال التاني :
 <img src="/e2.png" width="350" >

ال مش منطقي هو المثال التالت يا معلم وهو اني عملت فانكشن بتزود الكاونتر اسمها updateCount فالمفروض يحصل ريريندر للـChild بناءا عليها لكن اكتشفت ان لما بتكتب أي حاجه في الـinput بيحصل ريرندر للكومبوننت برضو مع اني مش باعت أي حاجه تخصها للـChild طب اي ال حصل بالضبط تعالي أقولك

كل مرة بغير الـstate الخاصة بالـInput بيحصل render للـApp وبالتالي هيعيد تعريف الفانكشن ال اسمها updateCount ويبعتها للـChild فكأن الـChild هيتبعت ليها داتا جديدة فهيحصل ليها reRender
وبالتالي فا احنا ممكن نقول ان الـmemo بتشتغل مع الـprimitive داتا تايب بس !
طب عاوزين حل للمشكلة هنا يظهر لينا الـuseCallBack وهو هوك بيعمل كاش للفانكشن بياخد الفانكشن والديبانسيس

بص المثال التالت :
 <img src="/e3.png" width="350" >
تعالي بقي نفهم الـuseMemo  ودي ببساطه هتكيش الفاليو بص علي مثال تلاته في حالة عملت updateCount هتلاقي فيه بطأ في العد والسبب هو الكاونت الخاص بالـoutput
بص المثال الرابع هتتوضح الدنيا
 <img src="/e4.png" width="350" >
الكلام ده مكتوب بشكل ألطف علي الـGithub :
https://github.com/ismaeinz/use-memo--use-callback
وهنا كلامي عن الـreRender لو أنت مهتم :
https://www.linkedin.com/posts/ismaeinz_when-does-react-re-render-components-felix-activity-7033511902366289921-LcRW?utm_source=share&utm_medium=member_desktop


المهندس حمزة شرح الموضوع باستفاضة ويسر :
https://www.youtube.com/watch?v=9MxTiWi8fjw

#رياكت_بالعربي

#frontEnd
#فرونت_اند

#reactJs
#رياكت_جي_اس

#javaScript
#جافاسكريبت

#performance
