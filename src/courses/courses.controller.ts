import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  HttpException,
} from '@nestjs/common';
import { COURSES } from './data';
import type { Course } from './dto/course.dto';
import { CapitalizePipe } from './capitalize/capitalize.pipe';

@Controller()
export class CoursesController {
  // GET /courses
  @Get('courses')
  getAllCourses() {
    return COURSES;
  }

  // GET /courses/2
  @Get('courses/:id')
  getCourseById(@Param('id', ParseIntPipe) id: number) {
    const course = COURSES.find((course) => course.id === id);
    if (!course) {
      throw new HttpException('Course not found', 404);
    }
    return course;
  }

  // POST /addcourse
  @Post('addcourse')
  addCourse(
    @Body('id', ParseIntPipe) id: number,
    @Body('title', CapitalizePipe) title: string,
    @Body('author', new DefaultValuePipe('Unknown Author')) author?: string,
  ) {
    const course: Course = { id, title, author };
    COURSES.push(course);
    return {
      message: 'Course added successfully',
      courses: COURSES,
    };
  }

  // DELETE /deletecourse?id=2
  @Delete('deletecourse')
  deleteCourse(@Query('id', ParseIntPipe) id: number) {
    const index = COURSES.findIndex((course) => course.id === id);

    if (index !== -1) {
      COURSES.splice(index, 1);
      return {
        message: `Course with id ${id} deleted`,
        courses: COURSES,
      };
    }

    return { message: 'Course not found' };
  }
}
