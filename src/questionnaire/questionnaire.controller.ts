import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { Questionnaire } from './questions.entity';

@Controller('questionnaire')
export class QuestionnaireController {
  constructor(private questionnaireService: QuestionnaireService) {}

  @Get()
  async findAll(): Promise<Questionnaire[]> {
    return this.questionnaireService.findAll();
  }

  @Post()
  async create(@Body() questionnaire: Questionnaire): Promise<Questionnaire> {
    return this.questionnaireService.
