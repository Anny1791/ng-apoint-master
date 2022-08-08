import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Apollo } from 'apollo-angular';
import {
  Get_getAllEventCategory,
  Get_getEventCategoryById,
  Get_getEventCategoryByName,
  Get_searchEventCategory,
} from 'src/app/graphql/graphql.queries';
import { DialogDelComponent } from '../dialog-del/dialog-del.component';

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.scss'],
})
export class EventCategoryComponent implements OnInit {
  iscard: boolean = false;
  event_category: any[] = [];
  event_id!: string;
  iscardlist: boolean = false;
  eventForm = this.formb.group({
    name: ['', Validators.required],
    description: [''],
    active_flag: [null],
  });

  constructor(
    private apollo: Apollo,
    private router: Router,
    private formb: FormBuilder,
    private dialogService: NbDialogService
  ) { }

  openCardSearch() {
    this.iscard = !this.iscard;
  }
  openCardList() {
    this.iscardlist = !this.iscardlist;
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: Get_getAllEventCategory,
        fetchPolicy: 'network-only',
      })
      .valueChanges.subscribe((res: any) => {
        this.event_category = res?.data?.getAllEventCategory;

      });
  }

  clearEventCategoryForm() {
    this.eventForm.get('name')?.reset('');
    this.eventForm.get('active_flag')?.reset(null);
  }

  resigterEventCategory() {
    this.router.navigate(['resigter-eventcategory', '0']);
  }

  editEventCategory(id: string) {
    this.router.navigate(['edit-eventcategory', id]);
  }

  removeEventCategory(id: string) {
    this.event_id = id;
    this.apollo
      .watchQuery({
        query: Get_getEventCategoryById,
        variables: {
          ID: this.event_id,
        },
      })
      .valueChanges.subscribe((res: any) => { });
    this.openDialog();
  }
  openDialog() {
    this.dialogService.open(DialogDelComponent, {
      context: {
        event_id: this.event_id,
      },
    });
  }

  searchEventCategory() {
    this.apollo
      .watchQuery({
        query: Get_searchEventCategory,
        fetchPolicy: 'network-only',
        variables: {
          NAME: this.eventForm.controls['name'].value,
          ACTIVE_FLAG: this.eventForm.controls['active_flag'].value,
        },
      })
      .valueChanges.subscribe((res: any) => {
        this.event_category = res?.data?.searchEventCategory;
      });
  }

  searchEventCategoryByName() {
    this.apollo
      .watchQuery({
        query: Get_getEventCategoryByName,
        variables: {
          NAME: this.eventForm.controls['name'].value,
        },
      })
      .valueChanges.subscribe((res: any) => {
        this.event_category = res?.data?.getEventCategoryByName;
      });
  }
  settings = {
    columns: {
      name: {
        title: 'Name',

      },
      description: {
        filter: false,
        title: 'Description',

      },
      active_flag: {
        title: 'Active',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select Type',
            list: [
              { value: "true", title: 'Actived' },
              { value: "false", title: 'Not Actived' },
            ]
          }
        },
        valuePrepareFunction: (value: any) => {
          if (value === true) {
            return 'Actived'
          }
          if (value === false) {
            return 'Not Active'
          }
          else { return }
        }
      },
    },


    actions: {
      custom: [
        {
          name: 'edit',
          title: '<img src="assets/icons/nb-edit.svg" width="30" height="30">',
        },
        {
          name: 'delete',
          title: '<img src="assets/icons/nb-trash.svg" width="30" height="30">',
        }
      ],
      add: false,
      edit: false,
      delete: false
    }
  }

  onCustomAction(event: any) {
    switch (event.action) {
      case 'edit':
        this.editEventCategory(event.data._id);
        break;
      case 'delete':
        this.removeEventCategory(event.data._id);
        break;
    }
  }
}
