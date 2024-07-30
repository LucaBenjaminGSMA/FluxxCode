let image_url = ""

if($.fluxx.config.user_profile_name == "WiDEF_Grantee")
{
image_url = "https://media.licdn.com/dms/image/D4E0BAQFoLemWOmOC8w/company-logo_200_200/0/1707325937032/widefglobal_logo?e=2147483647&v=beta&t=nJSi7b-gRQM1a5lfXUnIK2wGZ3eC7Vkv2j8n7vGh04Q"
}
else
{
image_url = "https://www.gsma.com/wp-content/themes/theme_gsma_2023/images_2023/GSMA-Logo-Black-RGB.svg"
}

document.getElementById("logo").children[0].src = image_url
