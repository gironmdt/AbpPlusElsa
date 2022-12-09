import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApprovalService, ApprovalDto } from '@proxy/approvals';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss'],
  providers: [ListService],
})
export class ApproveComponent implements OnInit {
  approve = { items: [], totalCount: 0 } as PagedResultDto<ApprovalDto>;
  isModalOpen = false; // add this line
  // form: FormGroup; // add this line
  schema: any;

  constructor(
    public readonly list: ListService,
    private approvalService: ApprovalService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getSchemaForm();
  }

  createBook() {
    //this.buildForm(); // add this line
    //this.buildForm();
    this.isModalOpen = true;
  }

  // add buildForm method
  // buildForm() {
  //   this.form = this.fb.group({});
  //   for (let field of this.listSchema) {
  //     this.form.addControl(field.PropertyBinding, new FormControl());
  //   }

  //   // this.form = this.fb.group({
  //   //   name: ['', Validators.required],
  //   //   email: [null, Validators.required],
  //   //   body: [null, Validators.required],
  //   // });
  // }

  // add save method
  save(data) {
    // if (this.form.invalid) {
    //   return;
    // }
    console.log(data);
    this.approvalService.create(data).subscribe(response => {
      this.sendActivity(response).subscribe({
        next: (response: any) => {
          this.isModalOpen = false;
          // this.form.reset();
          this.list.get();
        },
        error: error => {
          console.log(error);
        },
      });
    });
  }

  getSchemaForm() {
    this.approvalService.GetSchemaActivity().subscribe({
      next: listFormDefinition => {
        this.schema = listFormDefinition;
        console.log(this.schema )
        const bookStreamCreator = query => this.approvalService.getList(query);
        this.list.hookToQuery(bookStreamCreator).subscribe(response => {
          this.approve = response;
          console.log(this.approve);
        });
      },
    });
  }

  sendActivity(data: any) {
    return this.approvalService.approveActivity(data);
  }
}
