/*-----------------------------------*\
 * ##// FilterCategoriesItem
\*-----------------------------------*/
const filterCategoriesItem = document.querySelectorAll(".filter-categories .category-item");

filterCategoriesItem.forEach(item => {
  item.addEventListener("click", () => {
    // Remove the "active" class from all items
    filterCategoriesItem.forEach(i => i.classList.remove("active"));
    // Add the "active" class only to the clicked item
    item.classList.add("active");
  });
});
/*-----------------------------------------------------------------------------*/
/*-----------------------------------*\
 * ##// featuredBadges
\*-----------------------------------*/
const featuredBadges = document.querySelectorAll(".featured-badge");

// Load active states from localStorage on page load
featuredBadges.forEach((badge, index) => {
  const isActive = localStorage.getItem(`badge-${index}`) === "true";
  if (isActive) {
    badge.classList.add("active");
  }
  
  // Add click event listener to toggle active state
  badge.addEventListener("click", () => {
    badge.classList.toggle("active");
    
    // Store the active state in localStorage
    const isActive = badge.classList.contains("active");
    localStorage.setItem(`badge-${index}`, isActive);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const iconWrapperDetails = document.querySelectorAll(".icon-wrapper-details");

  // Load active states from localStorage on page load
  iconWrapperDetails.forEach((badge, index) => {
    const isActive = localStorage.getItem(`badge-${index}`) === "true";
    if (isActive) {
      badge.classList.add("active");
    }

    // Add click event listener to toggle active state
    badge.addEventListener("click", () => {
      badge.classList.toggle("active");

      // Store the active state in localStorage
      const isActive = badge.classList.contains("active");
      localStorage.setItem(`badge-${index}`, isActive);
    });
  });
});

/* */
function truncateText() {
  const lessonDescriptions = document.querySelectorAll('.lesson-description');
  const wordsLimit = 8; // عدد الكلمات المراد عرضها

  lessonDescriptions.forEach((lessonDescription) => {
      const originalText = lessonDescription.getAttribute('data-original-text') || lessonDescription.textContent;

      if (!lessonDescription.getAttribute('data-original-text')) {
          lessonDescription.setAttribute('data-original-text', originalText);
      }

      if (window.innerWidth <= 790) {
          const truncatedText = originalText.split(" ").slice(0, wordsLimit).join(" ") + '...';
          lessonDescription.textContent = truncatedText;
      } else {
          lessonDescription.textContent = originalText; // استعادة النص الأصلي إذا تغير العرض
      }
  });
}

window.addEventListener('resize', truncateText);
truncateText(); // لاستدعاء الدالة عند التحميل لأول مرة

const durationIconPause = document.querySelectorAll(".duration-icon.pause");
const lessonItems = document.querySelectorAll(".lesson-item");
const nextLessonButton = document.querySelector(".next-lesson");

let currentIndex = 0;

// Event listener for durationIconPause to toggle active on the clicked item only
durationIconPause.forEach(icon => {
  icon.addEventListener("click", () => {
    // Remove active class from all lesson items
    lessonItems.forEach(item => item.classList.remove("active"));

    // Add active class to the closest lesson-item of the clicked icon
    const lessonItem = icon.closest(".lesson-item");
    if (lessonItem) {
      lessonItem.classList.add("active");
    }
  });
});

// Event listener for the nextLessonButton to activate items sequentially
nextLessonButton.addEventListener("click", () => {
  // Remove active class from all lesson items
  lessonItems.forEach(item => item.classList.remove("active"));

  // Add active class to the current item
  lessonItems[currentIndex].classList.add("active");

  // Move to the next item in sequence, or loop back to the start if at the end
  currentIndex = (currentIndex + 1) % lessonItems.length;
});

const lesonCcourse = document.querySelectorAll(".leson-course");

lesonCcourse.forEach(item => {
  item.addEventListener("click", () => {
    // Remove the "active" class from all items
    lesonCcourse.forEach(i => i.classList.remove("active"));
    // Add the "active" class only to the clicked item
    item.classList.add("active");
  });
});


const lesonCcoursecourse = document.querySelectorAll(".leson-course.course");
const lesonCcoursesummary = document.querySelectorAll(".leson-course.leson-summary");
const lesonCcoursecomments = document.querySelectorAll(".leson-course.leson-comments");

const summaryContainer = document.getElementById("summary-container");
const courseContainer = document.getElementById("course-container");
const arabicSection = document.querySelector(".comment-section");

// Adding event listener to each element in lesonCcoursecourse
lesonCcoursecourse.forEach(item => {
  item.addEventListener("click", () => {
    courseContainer.classList.remove("active");
    summaryContainer.classList.remove("active");
    arabicSection.classList.remove("active");
  });
});
lesonCcoursesummary.forEach(item => {
  item.addEventListener("click", () => {
    courseContainer.classList.add("active");
    summaryContainer.classList.add("active");
    arabicSection.classList.remove("active");
  });
});
lesonCcoursecomments.forEach(item => {
  item.addEventListener("click", () => {
    arabicSection.classList.add("active");
    courseContainer.classList.add("active");
    summaryContainer.classList.remove("active");
  });
});


/*===========*/// تحديد جميع الصور داخل الدروس (سواء كانت موجودة أو تم إنشاؤها بواسطة JavaScript)
const inputNotes = document.querySelectorAll(".notes-input-notes"); // التعديل لاستخدام .notes-input-notes بدلاً من #notes-input-notes
const addButtons = document.querySelectorAll(".icon-wrapper-notes.add"); // استخدم querySelectorAll لجلب جميع الأزرار
const lessonsContainers = document.querySelectorAll(".lessons-container-notes"); // الآن هي مجموعة من الحاويات

// إضافة حدث للنقر على الزر لإضافة ملاحظة جديدة
addButtons.forEach(addButton => {
  addButton.addEventListener("click", () => {
    // المرور على جميع الحقول المدخلة
    inputNotes.forEach(input => {
      const noteText = input.value;

      // التأكد من أن النص ليس فارغًا
      if (noteText.trim() !== "") {
        // إنشاء عنصر <article> جديد مع الكلاسات المطلوبة
        const newLesson = document.createElement("article");
        newLesson.classList.add("lesson-notes");

        // إضافة class فريد لكل عنصر (مثلاً باستخدام timestamp)
        const uniqueClass = "lesson-" + new Date().getTime();
        newLesson.classList.add(uniqueClass); // إضافة class فريد

        // إنشاء عنصر <img> للصورة مع الكلاسات والخصائص المطلوبة
        const lessonIcon = document.createElement("img");
        lessonIcon.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/b7f04bd7f8d12f0c359ce0ac0e6648461df7acb5972b064431eed93bc0f1654b?placeholderIfAbsent=true&apiKey=954e1e40c83040d0846d7af99f0740b4";
        lessonIcon.alt = "";
        lessonIcon.classList.add("lesson-icon-notes");

        // إضافة حدث النقر لحذف العنصر عند النقر على الصورة
        lessonIcon.addEventListener("click", (event) => {
          // تفعيل أو تعطيل طبقة الحذف
          containerPinDel.classList.toggle("active");

          // التحقق إذا كانت طبقة الحذف نشطة
          if (containerPinDel.classList.contains("active")) {
            actionRowPinDel.addEventListener("click", () => {
              // حذف العنصر من جميع المقالات باستخدام الـ class الفريد
              const allArticles = document.querySelectorAll("article." + uniqueClass); // البحث عن العنصر باستخدام الـ class الفريد
              allArticles.forEach(article => article.remove());
              containerPinDel.classList.remove("active"); // إخفاء طبقة الحذف بعد الحذف
            }, { once: true });
          }
        });

        // إنشاء div يحتوي على النص مع الكلاسات المطلوبة
        const lessonInfo = document.createElement("div");
        lessonInfo.classList.add("lesson-info-notes");

        // إنشاء عنصر <p> وإضافة النص المدخل إليه مع الكلاسات المطلوبة
        const lessonText = document.createElement("p");
        lessonText.classList.add("lesson-text-notes");
        lessonText.textContent = noteText;

        // إلحاق <p> بـ <div> و <div> و <img> بـ <article>
        lessonInfo.appendChild(lessonText);
        newLesson.appendChild(lessonIcon);
        newLesson.appendChild(lessonInfo);

        // إضافة المقالة الجديدة إلى جميع الحاويات
        lessonsContainers.forEach(lessonContainer => {
          lessonContainer.appendChild(newLesson.cloneNode(true)); // إضافة نسخة من المقالة
        });

        // تفريغ حقل الإدخال بعد الإضافة
        input.value = "";
      }
    });
  });
});

// تعيين العناصر الخاصة بالفلاتر
const filterOption = document.querySelectorAll(".filter-option-notes");
const optionNotesDelet = document.querySelector(".filter-option-notes.delet");
const optionNotespinnedNotes = document.querySelector(".filter-option-notes.pinned-notes");
const optionNotesnewnotes = document.querySelector(".filter-option-notes.new-notes");

const notesAddNotes = document.querySelector(".notes-container-notes.add-notes");
const lessonsListNotes = document.querySelector(".lessons-list-notes");
const notesDeletNotes = document.querySelector(".notes-container-notes.delet-notes");
const notescClose = document.querySelector(".icon-wrapper-notes.close");
const lessonContainer = document.querySelector(".lesson-container-notes");
const notsLesson = document.querySelector(".nots-lesson svg");

// إضافة مستمع للنقر على `notsLesson`
notsLesson.addEventListener('click', () => {
  lessonContainer.classList.add("active");
});

// إزالة الفئة "active" عند النقر على `notescClose`
notescClose.addEventListener("click", () => {
  lessonContainer.classList.remove("active");
});

// إضافة مستمع للنقر خارج `lessonContainer` لإزالة "active"
document.addEventListener("click", (event) => {
  if (!lessonContainer.contains(event.target) && event.target !== notsLesson) {
    lessonContainer.classList.remove("active");
  }
});

// منع إغلاق `lessonContainer` عند النقر داخله
lessonContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

// جعل جميع الخيارات تزيل الفئة "active" عند الضغط على عنصر
filterOption.forEach(item => {
  item.addEventListener("click", () => {
    filterOption.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// حدث عند النقر على "new-notes" لإخفاء جميع الملاحظات
optionNotesnewnotes.addEventListener("click", () => {
  notesAddNotes.classList.remove("active");
  lessonsListNotes.classList.remove("active");
  notesDeletNotes.classList.remove("active");
});

// حدث عند النقر على "pinned-notes" لإظهار ملاحظات معينة
optionNotespinnedNotes.addEventListener("click", () => {
  lessonsListNotes.classList.add("active");
  notesAddNotes.classList.add("active");
  notesDeletNotes.classList.remove("active");
});

// حدث عند النقر على "delet" لإظهار وإخفاء الملاحظات
optionNotesDelet.addEventListener("click", () => {
  notesDeletNotes.classList.add("active");
  notesAddNotes.classList.add("active");
  lessonsListNotes.classList.remove("active");
});

// تحديد جميع الصور داخل الدروس (سواء كانت موجودة أو تم إنشاؤها بواسطة JavaScript)
const mnuePoints = document.querySelectorAll(".lessons-container-notes .lesson-notes img");

const containerPinDel = document.querySelector(".pin-delete-container-pin-del");
const actionRowPinDel = document.querySelector(".action-row-pin-del.delet");

document.querySelector(".lessons-container-notes").addEventListener("click", function(event) {
  // التحقق إذا كان العنصر الذي تم النقر عليه هو صورة
  if (event.target.tagName.toLowerCase() === "img") {
    const mnuePoint = event.target;
    const parentArticle = mnuePoint.closest("article"); // العثور على العنصر الأب <article>

    containerPinDel.classList.toggle("active");

    if (containerPinDel.classList.contains("active")) {
      actionRowPinDel.addEventListener("click", () => {
        // العثور على العنصر الذي يحتوي على نفس الـ class الفريد
        const uniqueClass = parentArticle.classList[1]; // الحصول على الـ class الفريد
        const allArticles = document.querySelectorAll(`article.${uniqueClass}`); // العثور على جميع المقالات التي تحتوي على هذا الـ class

        // حذف جميع المقالات التي تحتوي على الـ class الفريد
        allArticles.forEach(article => {
          article.remove();
        });

        containerPinDel.classList.remove("active"); // إخفاء طبقة الحذف بعد الحذف
      }, { once: true });
    }
  }
});

// تحديد العنصر الذي عند النقر عليه سيتم حذف جميع المقالات
const lessonsContainerNotes = document.querySelector(".lessons-container-notes a span");

// إضافة مستمع الحدث للنقر
lessonsContainerNotes.addEventListener("click", function() {
  // العثور على جميع العناصر <article> في الصفحة
  const allArticles = document.querySelectorAll("article");

  // المرور على جميع المقالات وحذفها
  allArticles.forEach(article => {
    article.remove(); // حذف المقال
  });
});
