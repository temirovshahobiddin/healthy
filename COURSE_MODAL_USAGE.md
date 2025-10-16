# Course Order Modal Usage

The course order modal is now set up and ready to use across your application.

## How to Use

### Basic Usage (No IDs)
```vue
<script setup>
const { openCourseOrderModal } = useModal()
</script>

<template>
  <button @click="openCourseOrderModal()">
    Записаться на курс
  </button>
</template>
```

### With Service ID
```vue
<script setup>
const { openCourseOrderModal } = useModal()
const serviceId = 123 // or "123"
</script>

<template>
  <button @click="openCourseOrderModal(serviceId)">
    Записаться на курс
  </button>
</template>
```

### With Service ID and Specialist ID
```vue
<script setup>
const { openCourseOrderModal } = useModal()
const serviceId = 123
const specialistId = 456
</script>

<template>
  <button @click="openCourseOrderModal(serviceId, specialistId)">
    Записаться на курс
  </button>
</template>
```

### With Only Specialist ID
```vue
<script setup>
const { openCourseOrderModal } = useModal()
const specialistId = 456
</script>

<template>
  <button @click="openCourseOrderModal(undefined, specialistId)">
    Записаться на курс
  </button>
</template>
```

## What Was Changed

1. **useModal composable** (`src/shared/composables/use-modal.ts`)
   - Added `courseOrderModalOpen` ref
   - Added `courseOrderData` ref to store service_id and specialist_id
   - Added `openCourseOrderModal()` helper function

2. **CourseOrderModal component** (`src/features/modals/ui/course-order.vue`)
   - Created simplified modal based on OrderModal
   - Accepts service_id and specialist_id from courseOrderData
   - Watches for modal open to populate form data

3. **Default layout** (`src/app/layouts/default.vue`)
   - Added CourseOrderModal to the teleport section

4. **Modal exports** (`src/features/modals/ui/index.ts`)
   - Exported CourseOrderModal

5. **Course places component** (`src/features/courses/ui/course-places.vue`)
   - Integrated the modal with the button click

## Course Lead Form

The course lead form (`src/features/courses/ui/course-leed-form.vue`) has also been updated to include:

- **Date field** (`meet_date`) - with calendar icon
- **Privacy policy checkbox** (`agreed`) - required field
- **Auto-populated IDs** - automatically sends `course.id` as `service_id` and `course.specialist.id` as `specialist_id`

### Form Data Structure
```javascript
{
  full_name: string,
  phone_number: string,
  meet_date: string,
  comment: string,
  agreed: boolean,
  service_id: number, // from course.id
  specialist_id: number // from course.specialist.id
}
```

## Notes

- Both `service_id` and `specialist_id` accept either string or number types
- The modal will automatically convert them to strings for the form
- The modal follows the same design pattern as the existing OrderModal
- Both the modal and the lead form submit to the same `/order` endpoint
- The lead form automatically includes course and specialist IDs from the course prop
