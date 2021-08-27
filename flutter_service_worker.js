'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f8f8969200adbaf9fe3fb08debd22ca6",
".git/config": "5de4da18083a2290c9303c5f88f6b638",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "9649d9791ca0e071e72fa96f00f5ae59",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b208fcdd8cd26f8ca45436187df7e8e",
".git/logs/refs/heads/master": "8b208fcdd8cd26f8ca45436187df7e8e",
".git/logs/refs/remotes/origin/master": "e64dc490ea6c501635d73745b29fe24d",
".git/objects/03/8702518e22c32ab0d8d3004c6b419e3904b762": "6c48b39e4ce22cb3baebe17be560d44d",
".git/objects/09/f30caf1d9b79200de2587b813ab3850fdfa253": "28758940e846d020d630a77c9265d8a0",
".git/objects/0f/bb3eb7c2bbb065b00231ffd5fc14fd2d0b4dca": "f0d2ac8811f96c5f23ceb8bbe6655231",
".git/objects/10/2ea5bcad22bfcb442961d2404e843d4ae41fd5": "581fa6a49d6d0ecb921819dcd4782d1f",
".git/objects/12/216d678ec3b5c45727705eaad8e79d10ff4116": "de6baf1010c9a04eb81aa792e2b67b01",
".git/objects/15/d6dfca204dc847f9734c5e2f24ecdc0e278cb9": "19d3ac3a670a6ccb93e5c737f8492ba3",
".git/objects/17/1b06de479cb86d8783f41d7e7b44d013d12d05": "d87c5b1511854db08ae950fe5bcc5d84",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/602720b7ad81640c3fab4f3298b0eb117ab937": "c1bf2a543acaf4d14c00b837c12592be",
".git/objects/27/101b79f630e4af3aa95efd62c11dfa0d7514e8": "cea2a78c3e15cfbf6ad736446c7c732e",
".git/objects/27/2b3dd356b28364da150ba280b0f4f54a27bce8": "fa29c6e6af7ffd64c62b9d2dd3d2bc66",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2f/c73ac09a702ee488ee2ae1a7ef44788deba7e4": "2ef95372ebcd9667607030ffd0aea7bb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/d4ad3f6964c7308b9419573b40ad6ee6d0796d": "3be5f5ed2213d99dbf81e1e9b6562d31",
".git/objects/36/db4cf7012a206b593f87af19ec4db13c9d1f64": "385321e01a2c9c8823321e76256c2b59",
".git/objects/37/5e568840737ecab0afe74ad78ea37715496439": "cf37d31a2ddf51f62a3e0bd5013b04a1",
".git/objects/38/6186ac8f09351063aa397b00328b97cd3097ae": "39c2dd912fb24a524c86c8bc7c8434f1",
".git/objects/38/78d8cd7a04feb8949b86b73fdea312361f09bd": "7b9ba547adb43619093a87e449799b3e",
".git/objects/38/d692fddc3c4688970ddb3036e2ac28f524f0d6": "02aa92d50c76fcd1822f616349018325",
".git/objects/3b/bdf7d757253f913ed9f4166a61e76fd270ebbc": "45c08f561b3cde30d323dc0494fd7d4c",
".git/objects/3d/80e6fdd3b7553c881fb1ac7d2edec878203b0c": "d9fa0c22c73b95461e298837f958a3eb",
".git/objects/41/a9df1b632d55d91095104f6db489b84c8398ed": "21b1914a4fe2fe8daec80eaef4dc7e7a",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/43/9b870a571ff4b3a4dbd671984726e6d07c85d2": "9d08e4bb0177f548b1828feb69b3b15c",
".git/objects/43/dd8f42bec90404439cdd5fe49f4acf8de920d7": "3a07b0e7314c67c43390e7bd61a6930e",
".git/objects/47/28a0386ef4fc96fc82984c4af2bb5c69e279bb": "066730db787f2be2b4ceff9914736ae4",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/3cafed06b454c6b2a5a043bfc2b278956214ba": "de3a29a5773e640fe4400ee20374be93",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4e/823e8112cf957877d2a1ca226df349d17e137d": "e805e624b0c9f6a64ea15041d9ae3e6e",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/52/e6357703e29e097d234947d8ccd3d42d9dd55c": "5134b48ddb9fd33e7b519a413fb89db5",
".git/objects/52/ef6f37aa6ca1398d27aeea012ac649b7423844": "e6c36f4c3048789d0693bb21be88e2d1",
".git/objects/54/e7059cf36359cb5a3860085714a95306af0dea": "84d83371b8598214017b309f9a987865",
".git/objects/5a/a1ceefdb79ce682c60e3255b4dfc84c2636c61": "96275b5563dbd45a75cb0c299b47ff4b",
".git/objects/5b/e2e91309f65587daed440252ffa2be9b7b86d5": "fe2fe0f0372404ef915e088c47b82289",
".git/objects/5f/173b27a90ded4961119a2184131f20e4341f9e": "7c37ab9e08fe33c6673c7a9b2b07a6a1",
".git/objects/5f/fe83f5a6dada7002022d5801cefa1117ad1e75": "5e9ba392b93d7fcbf24c0a64a131d6de",
".git/objects/62/dd61e5d0033f726c86fd74b00c7a1eb4a715c5": "b09ccd2e4879a9e9c3b859c34db42d2a",
".git/objects/66/6e5ac3807d0ed202d8a7e33d31cfb48be32695": "b9b22294cbd8ec9f54cae5aab1795aa1",
".git/objects/67/19377499e8c574b20e5265331c194f9f914e36": "723ed024e3c28a400558a3c1e6eaa584",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/6a/f77d5f412dbad8c7e84422c5ae324d74de0fb3": "29791878dc9d499831d22db9577ba9da",
".git/objects/6b/c880ef1382ff909126b6da5d2e9b964944543e": "c472c07c07c2907a1659e72501230098",
".git/objects/73/684e111f4fe1e8c91548249ab5b627fa9de47c": "2420e416d648621345ff14d537c39562",
".git/objects/73/a7428b5ef11537c2d2e918fe87d0ef9814afb2": "b0ff4c6976bc71e33feca9c912e8204e",
".git/objects/73/d5c7c98abb8c81d3992deaa7107c32ef681fe1": "2ce4d26208fde47b21088be489c4581d",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/76/94f2404ebd58d016b61bfbac5dfae10d975fd8": "7846c090c811ad55f8e66e3f858bb61f",
".git/objects/77/30b86ba42af4a92c78735688dddcfe410d04ce": "c16fed0fc0385ea7a76d75fe409975ee",
".git/objects/77/84eb398e1bcff87b3bbec5ea5a7096c1710d6a": "c657c0b1173340a0a4dda1afd6042f86",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/49b5c3d82c49d83292f0c258769bfd6f5c35b1": "1f80e5e5180c7a660a702544d2692763",
".git/objects/7a/9f94c157af343bba9a1849699c14a17e3fb9c6": "75ebe33436c3e2216cab5e6c7f902251",
".git/objects/7b/b1117981b1e27db0ed2679878d335fa39854f5": "d054af4cf3c3d9984a7cdb799ef454ff",
".git/objects/7f/e31289ce91cbc8e94d23e5b01413dce22f682d": "95fdec51b9cb1ed62ede0a2e7ab23cce",
".git/objects/80/10c077e060aa4de5dd8e5c61968d94ac87c477": "d0bc6ac60a382e1ae1bc5a49367c85b1",
".git/objects/82/94fb6e129fad21e9be63c8238019a1650963a3": "8dbe12d9ca125d96b0df782ed5dbe486",
".git/objects/85/c57fc861116c236ed0c0c2b2bd29d8ce413354": "6fbca6105324de108a56f58e2938c195",
".git/objects/86/0cd81731285204b12072da667c930475214931": "bcb9934c132179a962092554345bbcb6",
".git/objects/86/8ac90b7663eae5e4a935e88cba959235a54df8": "db64f3bb889454a75118123f12922164",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c7509a8923ee15d65a3ff50505f3419063f74b": "02d2d8c88d9e08b6d6ebee2ea83a8ec6",
".git/objects/8e/9971dbf161fd59a2283b6cf17f30a4a9248436": "a8d72f02a4fde9f6a1d56a6a36f783c4",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/95/52e376d1da93d21be5994c31f370489b729d7a": "7b10d8d725e1ab45565025f0654e6d57",
".git/objects/95/b954d79291347939e42b79d1846c4b0a4300de": "510e05bc10c21b196010a4bc65567d25",
".git/objects/95/db43d89270532fb7290caa79030f4591f01324": "107a2c5a0a712cd3b51f27e7fa9e4b74",
".git/objects/97/38fdc952b47c6a3824a7e5aa437729acb23d1a": "8929af9a03da69b9a9a9a283904804d9",
".git/objects/97/748fa027b49c542c111114376b61fab863c359": "d9e4191b25e58713bd021013d52e71fe",
".git/objects/97/fda88ed7f24495870983e5208dd0fc18b220a0": "6c699a7ca82144a83cfb90e66cf89378",
".git/objects/98/0125dce2d13084c9e061dcf740c4b01bd3cd16": "e67a55037637c720d62ea2fc9854b051",
".git/objects/99/d491b9810d692f4e04a3a7db88e2bb5f956e92": "19d4ddca02c14ecbf44452a5a57e7734",
".git/objects/9f/c926cd85a433c4448da3f698f9a5f47b86780f": "b0d31b8ffa5c4bfa436921d3df07737d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/f5bc38d5144f427737c56fbfccbf79e4b7dd6e": "a95824587939f17ebd7b640ef853d559",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ad/c8afe16b0b5b16052b2b5a07f90911a9128f32": "b8764d42a45708133269b9825fe1b602",
".git/objects/b3/f45e272e55424056185c7adb67f9b6b976a1ee": "cdad6ecda51ec3b34b5eea37896e30f5",
".git/objects/b5/3b0a92f0d3d208f579d3103797648d6e7c80c6": "5b9ddbfbed0d6bc22c0e169ccb2f75f8",
".git/objects/b5/afbe2d37056e3eb87717349d4ca46e1bc74b8f": "0bbdbd5dc55097a954f449ff3ac331ed",
".git/objects/b6/464d450728deb917ec3fc2439467a43a781dba": "aa6288e28148b99feeab8204e60fb7e8",
".git/objects/b6/51ef3a11fe3caef48266553451a43703ba2532": "9117a144d790108c88831af0a0a77824",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/73cab00cc973fbd5e8efdeafc89235306a7aa1": "12147d307ed12658ac99f723f56faf39",
".git/objects/be/0ead8b85d2b3a4eceb696586a5b3fa75d4cca7": "f1db3b3c2d621b92102a1bc9c63d3213",
".git/objects/be/7f426babcd1f079490f06b49679f0a8fca4369": "3d920bd22c37716dbacdd41c78df01e2",
".git/objects/be/a9e1feb0e907986e28e2d007fd02e2a2544e04": "c71f9a900d85c51a4e307697009915b7",
".git/objects/be/c1de163becef34fde1c5fe7b7c21bc756bd8e0": "e87b0b51b85d3c4f6e79a7f6a05708c9",
".git/objects/c0/840d03bc49d96b0c6271f65086370c4e0516e1": "ba4ae56edd18f04d280cbffe6ecb3927",
".git/objects/c1/0539027c39d330245a4cd52dfae4c70742d88b": "22f543f893b6754666c1a6f9a4a34dc2",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c2/ddb3d506d37d4eb824d8ecd577a02a1133a586": "7f9b2aabc201619b9cdacd1b2bfff297",
".git/objects/c3/e76924906f89e46f8e9d0e15617eef627e5da6": "4000eb102fd175554e62d83231dbecba",
".git/objects/c3/e942757080645f9f8826d44ac0df976a8f8da6": "62b28a2471772c767358d6aa4578b052",
".git/objects/c4/3889ebfa0bc3f84917e5899a42578c7180162f": "e64b95c74578e0669bc094bf73a33cda",
".git/objects/c6/01a055590c1929d0c7ba696095c044b82b3591": "91e0e4d2cf2b51227c076d57bdb162f0",
".git/objects/c6/d0adb6e8f5eec643873656df67a3e9b4588331": "04c3c1a4f22279c66a12a81185fd8e1d",
".git/objects/c9/c9dc2ef02e834212a883de76b692919efe0efd": "c3e7536fa7af4e8b5ddf57666a472858",
".git/objects/cc/b77b76dc67b4aed8e8b9673d64dd738a9a8e3a": "5b2e7153033e954f4e3876d40152214f",
".git/objects/cf/4d49d4303f099db153fdfbaed88b8efab153ea": "15a0973241308dc341ca7ca08490b63c",
".git/objects/d2/e819f4b986185e3b3547bbbb0e3f3c418c7fd1": "eca5a952e9fa02975d11525e9f101f1f",
".git/objects/da/093423d550f52ec3a30b3e408b2df6747c5fde": "30d15731630b54a466c5aaa41fdfdfff",
".git/objects/db/5d60f7531cd1363f98a2f415df78694d764ed5": "527a05dde457277a3258366bbfb7bf36",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/df/024b4da8d5306024a9162b41e5e68ece2f5877": "15fd3ba49b531e4e9b889196839eca0e",
".git/objects/e0/9207dc634d05310694b7a3cf44ac6614a023a9": "60a683a537bf6eb04a95ace5e252bc2c",
".git/objects/e2/abfed0b02cdfc3fc8c24e7494177394a684b3b": "b4b647f9b40de4e580b8e9c6b3185ac4",
".git/objects/e4/7725969943a2b08cfd25ad93ef8189d84da147": "28345b0c0a94dc16e68a25da3a9b070e",
".git/objects/e5/42affd40fb1c7fea70790a2c01e5d11df275fd": "307a6fd73b9c8a6152a4e7880ff2f92d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/8cd06e9193e1ff7385ff7ec568affb993e0d5c": "3022481b9fcc583ed42153ca72fb775e",
".git/objects/e9/1c04074fc5413dff3d9e1aac47f1f6cd291852": "8ad513bc8d9a3f939021f71ca04cd579",
".git/objects/ea/25d164b7f5eef28beac5bfc85bc81e297c6b9c": "17618d4cdabb7655373348bad954f9c1",
".git/objects/ea/fe3ffb18cfac61be16183a1460b54d933c2108": "15296f6c8f6ec35e2036cc711a45585d",
".git/objects/eb/28e7a48c03c67f4e588ed89e98e0ab1a95a16c": "efe61f5c23a873670859c37eae599af0",
".git/objects/ec/acc699164f735490fd4368640fbef0fa2d6184": "f1c2218a1d56fca76d0da6860d077598",
".git/objects/ee/2301480ee149817e60f879614ee38195dc5f0b": "bd09dc7178fe14d6b3d41510b2a1ed2a",
".git/objects/ef/05613ac8b3f29e452360666ac148acfc9d0e8e": "97d9766445b0bddc39c6b6242130bca7",
".git/objects/ef/dd5e84a0397ecada7b9cfde51db87db08766bd": "ad7d8c09a50d25e6b1fd7275b39a3dbe",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f4/a51c49dc7fd27cb64409ca1eba302b561b3f10": "6b84926eecf4a5d6d125c022316cba7d",
".git/objects/f9/4d262342cc5501aa54f6e9d5b993cdf3a5f00a": "d5db93f7991c39e4c198fbdc462ba7c9",
".git/objects/fa/89c145658b27785f085d2ee143995e45255ab0": "efc3f0a6d8012f7377199aeacc9a34a8",
".git/objects/fb/5ea6f878aaae39d71f8c14bdea9dae6fd17750": "051a966ca7e087192b5646c16e369848",
".git/refs/heads/master": "29f2a5cc787e2352c0d63b852abd6728",
".git/refs/remotes/origin/master": "29f2a5cc787e2352c0d63b852abd6728",
"assets/AssetManifest.json": "19094ea00876701563df6f72ab0e8348",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/Raffina.ttf": "cb1d7d10caef758906320ec63602a3f8",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/assets/fonts/RobotoCondensed-BoldItalic.ttf": "c783051f11a8f369e8acc7adfcb5478d",
"assets/assets/fonts/RobotoCondensed-Italic.ttf": "d6fc5ec5403ec65bdaecfe44b7b84402",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "885e5558c90864ddb72ad486f36470cc",
"assets/assets/fonts/RobotoCondensed-LightItalic.ttf": "f0177f3fd234ac8664509f19aef620fb",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"assets/assets/images/27649-lets-chat.zip": "f3a3127994123094f0ecba74810a4e9a",
"assets/assets/images/animation.json": "573a3c55b96f0e97b714554eb230e13c",
"assets/assets/images/background.jpg": "efb3ca1e2c8f5226dbec770ae275ca86",
"assets/assets/images/figma-1-logo.png": "ebe880ba05add588e0518ad30d6fe1de",
"assets/assets/images/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/images/githubsearch/githubindex.jpeg": "b166ed90ea1b756157b55e5a89ec23c9",
"assets/assets/images/githubsearch/githublazy.jpeg": "1e7fc1613b7141e3310730b74b9fc3d2",
"assets/assets/images/kisspng-coreldraw-computer-software-graphics-suite-5af31817680c43.3913459315258808554262-500x500.png": "34352e02ce88346cca5fa47b19aec268",
"assets/assets/images/komisains/komisainsbuku.jpeg": "0d5ae70d3bf1d0ef49033fb29b47f1f6",
"assets/assets/images/komisains/komisainsdashboard.jpeg": "8781eb15a970b79d9ba718a1f459fe8f",
"assets/assets/images/komisains/komisainsinfo.jpeg": "570c4165ff0e8da73165ce7a7df8373b",
"assets/assets/images/komisains/komisainsprofile.jpeg": "24ecaf36566183bf11e101ef5076f0ca",
"assets/assets/images/komisains/news.jpeg": "e49d37d8be62d52c8081b82b6241879a",
"assets/assets/images/komisainsUI/bukusaku.png": "e6caf35152eb88740cee9b9e75a97c24",
"assets/assets/images/komisainsUI/dashboard.png": "1fca5857233214e607906f2a9c189227",
"assets/assets/images/komisainsUI/detailberita.png": "4f8a56f43b6c61d3123372aac60e79a0",
"assets/assets/images/komisainsUI/feed.png": "d1af8022920b85d3a66df8a9ed251b99",
"assets/assets/images/komisainsUI/infotraining.png": "4b0b439253c5054aceafb6128989738e",
"assets/assets/images/komisainsUI/profileapp.png": "4735b627a3731638bad176b8a49546d9",
"assets/assets/images/komisainsUI/signup.png": "6a74b2b5e06449f85fcf8cb507a73a5b",
"assets/assets/images/komisainsUI/splashscreen.png": "98dd316123bb86a8162371e87d59ab3a",
"assets/assets/images/komisainsUI/welcomescreen.png": "cd2ecc2672fd3ccfb2e40ede22647857",
"assets/assets/images/logex/checkharga.png": "2f651755285fcfc2a2762f5d5aea0a99",
"assets/assets/images/logex/editProfile.png": "a47144b8ba8839f2eac1e5c874e8f429",
"assets/assets/images/logex/Home.png": "b6895209f55e9c9f382400894f947549",
"assets/assets/images/logex/MyOrder.png": "4d799a1d2246fb7b75e42d37884ccf4b",
"assets/assets/images/logex/Order.png": "e6ff4623f934c93067b802368041be2f",
"assets/assets/images/logex/Profile.png": "6d4f6d7ed55f23f3b0d3b3e798808052",
"assets/assets/images/photoshop.png": "d440e0e94bc7cf601c8090f0081e14f2",
"assets/assets/images/profile.png": "9d6d84f9877abbd7d3c1db30b3ee0da9",
"assets/assets/images/restaurantapps/order.png": "853d47b3847663d5f435189d3be084f4",
"assets/assets/images/restaurantapps/order2.png": "25e462a5d7a73417a3186eda0b12d560",
"assets/assets/images/restaurantapps/table.png": "fb8367c1e89749ef09bfabee1669f464",
"assets/FontManifest.json": "738847437dcf4a511b82d487763f88ab",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "50393ba740e653622437c9d38a2dea81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "797e01f9f3632fb3cb9e39f22e1e67f6",
"/": "797e01f9f3632fb3cb9e39f22e1e67f6",
"main.dart.js": "93c4beda43165316a23119724c38b142",
"manifest.json": "ba3d8c033410d862e211171922197dcb",
"version.json": "388a60d166f68e6644640c7a0b2aaa90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
